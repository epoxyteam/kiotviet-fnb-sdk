export type WebhookEventType = 
  | 'customer.update'
  | 'customer.delete'
  | 'product.update'
  | 'product.delete'
  | 'stock.update';

export interface WebhookConfig {
  Type: WebhookEventType;
  Url: string;
  IsActive: boolean;
  Description?: string;
}

export interface Webhook extends WebhookConfig {
  id: number;
  retailerId: number;
}

export interface RegisterWebhookRequest {
  Webhook: WebhookConfig;
}

export interface WebhookResponse {
  id: number;
  type: WebhookEventType;
  url: string;
  isActive: boolean;
  description?: string;
  retailerId: number;
}

export interface DeleteWebhookResponse {
  message: string;
}

// Webhook event payloads
export interface WebhookEvent<T = any> {
  Id: string;
  Attempt: number;
  Notifications: Array<{
    Action: string;
    Data: T[];
  }>;
}

export interface CustomerUpdateEvent extends WebhookEvent {
  Data: Array<{
    Id: number;
    Code: string;
    Name: string;
    Gender?: boolean;
    BirthDate?: string;
    ContactNumber: string;
    Address?: string;
    LocationName?: string;
    Email?: string;
    ModifiedDate: string;
    Type?: number;
    Organization?: string;
    TaxCode?: string;
    Comments?: string;
  }>;
}

export interface CustomerDeleteEvent {
  RemoveId: number[];
}

export interface ProductUpdateEvent extends WebhookEvent {
  Data: Array<{
    Id: number;
    Code: string;
    Name: string;
    FullName: string;
    CategoryId: number;
    CategoryName: string;
    AllowsSale: boolean;
    HasVariants: boolean;
    BasePrice: number;
    Weight?: number;
    Unit: string;
    MasterUnitId?: number;
    ConversionValue: number;
    ModifiedDate: string;
  }>;
}

export interface ProductDeleteEvent {
  RemoveId: number[];
}

export interface StockUpdateEvent extends WebhookEvent {
  Data: Array<{
    ProductId: number;
    ProductCode: string;
    ProductName: string;
    BranchId: number;
    BranchName: string;
    Cost: number;
    OnHand: number;
    Reserved: number;
  }>;
}

export interface WebSocketMessage<T = any> {
  type: WebhookEventType;
  data: T;
  timestamp: string;
}

export interface WebSocketConfig {
  autoReconnect?: boolean;
  reconnectInterval?: number;
  maxReconnectAttempts?: number;
}

export interface WebSocketEventHandlers {
  onCustomerUpdate?: (data: CustomerUpdateEvent['Data']) => void;
  onCustomerDelete?: (data: CustomerDeleteEvent['RemoveId']) => void;
  onProductUpdate?: (data: ProductUpdateEvent['Data']) => void;
  onProductDelete?: (data: ProductDeleteEvent['RemoveId']) => void;
  onStockUpdate?: (data: StockUpdateEvent['Data']) => void;
  onError?: (error: Error) => void;
  onReconnect?: () => void;
  onClose?: () => void;
}