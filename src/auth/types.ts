export interface AuthConfig {
  clientId: string;
  clientSecret: string;
  retailer: string;
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface StoredToken extends TokenResponse {
  expiresAt: number;
}

export interface TokenManager {
  getToken(): Promise<string>;
  isTokenValid(): boolean;
  refreshToken(): Promise<void>;
}

export interface TokenStorage {
  saveToken(token: StoredToken): Promise<void>;
  getToken(): Promise<StoredToken | null>;
  removeToken(): Promise<void>;
}