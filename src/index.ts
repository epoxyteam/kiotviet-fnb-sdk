import { AuthConfig, StorageType, createTokenManager } from './auth';
import { HttpClient, HttpClientConfig } from './utils/http-client';
import { CategoriesApi } from './api/categories';
import { ProductsApi } from './api/products';
import { OrdersApi } from './api/orders';
import { CustomersApi } from './api/customers';
import { WebhooksApi } from './api/webhooks';
import { WebSocketConfig, WebSocketEventHandlers } from './types/webhook';

export interface KiotVietClientConfig extends AuthConfig {
  storageType?: StorageType;
  websocket?: WebSocketConfig;
}

export class KiotVietClient {
  private httpClient: HttpClient;
  
  // API endpoints
  public readonly categories: CategoriesApi;
  public readonly products: ProductsApi;
  public readonly orders: OrdersApi;
  public readonly customers: CustomersApi;
  public readonly webhooks: WebhooksApi;

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
    this.products = new ProductsApi(this.httpClient);
    this.orders = new OrdersApi(this.httpClient);
    this.customers = new CustomersApi(this.httpClient);
    this.webhooks = new WebhooksApi(this.httpClient, config.websocket);
  }

  /**
   * Connect to the WebSocket server for real-time webhook events
   * @param handlers Event handlers for different webhook events
   */
  async connectWebSocket(handlers: WebSocketEventHandlers): Promise<void> {
    const token = await this.httpClient.tokenManager.getToken();
    this.webhooks.connect(token, handlers);
  }

  /**
   * Disconnect from the WebSocket server
   */
  disconnectWebSocket(): void {
    this.webhooks.disconnect();
  }
}

// Export types
export * from './types/category';
export * from './types/product';
export * from './types/order';
export * from './types/customer';
export * from './types/webhook';
export * from './auth/types';

// Re-export storage types
export { StorageType } from './auth';