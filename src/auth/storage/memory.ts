import { TokenStorage, StoredToken } from '../types';

export class MemoryTokenStorage implements TokenStorage {
  private token: StoredToken | null = null;

  async saveToken(token: StoredToken): Promise<void> {
    this.token = token;
  }

  async getToken(): Promise<StoredToken | null> {
    return this.token;
  }

  async removeToken(): Promise<void> {
    this.token = null;
  }
}