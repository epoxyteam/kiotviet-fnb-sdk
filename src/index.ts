import { AuthConfig, StorageType, createTokenManager } from './auth';
import { HttpClient, HttpClientConfig } from './utils/http-client';
import { CategoriesApi } from './api/categories';

export interface KiotVietClientConfig extends AuthConfig {
  storageType?: StorageType;
}

export class KiotVietClient {
  private httpClient: HttpClient;
  
  // API endpoints
  public readonly categories: CategoriesApi;

  constructor(config: KiotVietClientConfig) {
    const tokenManager = createTokenManager(config, config.storageType || 'file');

    const httpConfig: HttpClientConfig = {
      baseURL: 'https://publicfnb.kiotapi.com',
      retailer: config.retailer,
      tokenManager
    };

    this.httpClient = new HttpClient(httpConfig);
    
    // Initialize API endpoints
    this.categories = new CategoriesApi(this.httpClient);
  }
}

// Export types
export * from './types/category';
export * from './auth/types';

// Re-export storage types
export { StorageType } from './auth';