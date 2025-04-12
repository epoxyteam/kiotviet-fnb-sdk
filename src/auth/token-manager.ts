import axios, { AxiosError } from 'axios';
import { AuthConfig, TokenManager, TokenResponse, StoredToken, TokenStorage } from './types';

export class KiotVietTokenManager implements TokenManager {
  private config: AuthConfig;
  private storage: TokenStorage;
  private tokenEndpoint = 'https://api.fnb.kiotviet.vn/identity/connect/token';

  constructor(config: AuthConfig, storage: TokenStorage) {
    this.config = config;
    this.storage = storage;
  }

  async getToken(): Promise<string> {
    const storedToken = await this.storage.getToken();
    
    if (storedToken && this.isTokenValid(storedToken)) {
      return storedToken.access_token;
    }

    await this.refreshToken();
    const newToken = await this.storage.getToken();
    
    if (!newToken) {
      throw new Error('Failed to obtain access token');
    }

    return newToken.access_token;
  }

  isTokenValid(token?: StoredToken): boolean {
    if (!token) return false;
    
    // Add 30 seconds buffer before expiration
    const expirationBuffer = 30 * 1000;
    return token.expiresAt > Date.now() + expirationBuffer;
  }

  async refreshToken(): Promise<void> {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      params.append('scope', 'PublicApi.Access.FNB');
      params.append('client_id', this.config.clientId);
      params.append('client_secret', this.config.clientSecret);

      const response = await axios.post<TokenResponse>(
        this.tokenEndpoint,
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      const { access_token, expires_in, token_type } = response.data;
      
      const storedToken: StoredToken = {
        access_token,
        expires_in,
        token_type,
        expiresAt: Date.now() + expires_in * 1000
      };

      await this.storage.saveToken(storedToken);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.error || error.message;
        throw new Error(`Failed to refresh token: ${errorMessage}`);
      }
      throw new Error('Failed to refresh token: Unknown error occurred');
    }
  }
}