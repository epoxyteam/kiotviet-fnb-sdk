import WebSocket from 'ws';
import { HttpClient } from '../utils/http-client';
import {
  WebhookConfig,
  WebhookResponse,
  RegisterWebhookRequest,
  DeleteWebhookResponse,
  WebSocketConfig,
  WebSocketEventHandlers,
  WebSocketMessage,
  WebhookEventType,
  CustomerUpdateEvent,
  CustomerDeleteEvent,
  ProductUpdateEvent,
  ProductDeleteEvent,
  StockUpdateEvent
} from '../types/webhook';

export class WebhooksApi {
  private client: HttpClient;
  private baseUrl = '/webhooks';
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private config: WebSocketConfig = {
    autoReconnect: true,
    reconnectInterval: 5000,
    maxReconnectAttempts: 5
  };
  private handlers: WebSocketEventHandlers = {};

  constructor(client: HttpClient, wsConfig?: Partial<WebSocketConfig>) {
    this.client = client;
    this.config = { ...this.config, ...wsConfig };
  }

  /**
   * Register a new webhook
   * @param config The webhook configuration
   * @returns Promise with the registered webhook details
   */
  async register(config: WebhookConfig): Promise<WebhookResponse> {
    const request: RegisterWebhookRequest = { Webhook: config };
    const { data } = await this.client.post<WebhookResponse>(this.baseUrl, request);
    return data;
  }

  /**
   * Delete a webhook registration
   * @param id The ID of the webhook to delete
   * @returns Promise with the deletion message
   */
  async unregister(id: number): Promise<DeleteWebhookResponse> {
    const { data } = await this.client.delete<DeleteWebhookResponse>(`${this.baseUrl}/${id}`);
    return data;
  }

  /**
   * Connect to the WebSocket server for real-time updates
   * @param token The access token for authentication
   * @param handlers Event handlers for different webhook events
   */
  connect(token: string, handlers: WebSocketEventHandlers): void {
    this.handlers = handlers;
    const wsUrl = 'wss://publicfnb.kiotapi.com/webhooks/ws';
    
    this.ws = new WebSocket(wsUrl, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    this.setupWebSocketHandlers();
  }

  /**
   * Disconnect from the WebSocket server
   */
  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
      this.reconnectAttempts = 0;
    }
  }

  private setupWebSocketHandlers(): void {
    if (!this.ws) return;

    this.ws.on('message', (data: WebSocket.Data) => {
      try {
        const message = JSON.parse(data.toString()) as WebSocketMessage;
        this.handleWebhookEvent(message);
      } catch (error) {
        this.handlers.onError?.(new Error('Failed to parse webhook message'));
      }
    });

    this.ws.on('error', (error) => {
      this.handlers.onError?.(error);
    });

    this.ws.on('close', () => {
      this.handlers.onClose?.();
      this.handleReconnection();
    });
  }

  private handleWebhookEvent(message: WebSocketMessage): void {
    switch (message.type) {
      case 'customer.update':
        this.handlers.onCustomerUpdate?.(
          (message.data as CustomerUpdateEvent).Data
        );
        break;
      case 'customer.delete':
        this.handlers.onCustomerDelete?.(
          (message.data as CustomerDeleteEvent).RemoveId
        );
        break;
      case 'product.update':
        this.handlers.onProductUpdate?.(
          (message.data as ProductUpdateEvent).Data
        );
        break;
      case 'product.delete':
        this.handlers.onProductDelete?.(
          (message.data as ProductDeleteEvent).RemoveId
        );
        break;
      case 'stock.update':
        this.handlers.onStockUpdate?.(
          (message.data as StockUpdateEvent).Data
        );
        break;
    }
  }

  private handleReconnection(): void {
    if (!this.config.autoReconnect || 
        this.reconnectAttempts >= (this.config.maxReconnectAttempts || 5)) {
      return;
    }

    this.reconnectAttempts++;
    this.handlers.onReconnect?.();

    setTimeout(async () => {
      try {
        const token = await this.client.tokenManager.getToken();
        this.connect(token, this.handlers);
      } catch (error) {
        this.handlers.onError?.(new Error('Failed to reconnect to WebSocket server'));
      }
    }, this.config.reconnectInterval);
  }
}