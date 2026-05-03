export interface OrderDetail {
  productId: number;
  quantity: number;
  price: number;
  note?: string;
  rank: number;
}

export interface OrderPartnerDelivery {
  code: string;
  name: string;
}

export interface DeliveryDetail {
  receiver: string;
  contactNumber: string;
  address: string;
  locationName: string;
  wardName: string;
  deliveryCode?: number;
  partnerDelivery?: OrderPartnerDelivery;
  expectedDelivery?: string;
  price: number;
  status: number;
}

export interface CreateOrderRequest {
  branchId: number;
  customerId: number;
  orderDetails: OrderDetail[];
  deliveryDetail?: DeliveryDetail;
}

export interface UpdateOrderRequest {
  branchId?: number;
  customerId?: number;
  orderDetails?: OrderDetail[];
  deliveryDetail?: DeliveryDetail;
  status?: number;
  historyNote?: string;
}

/** Full Order entity returned by list/get endpoints */
export interface Order {
  /** Order ID */
  id: number;
  /** Order code */
  code: string;
  /** Purchase date */
  purchaseDate: string;
  /** Retailer ID */
  retailerId: number;
  /** Branch ID */
  branchId: number;
  /** Sold by user ID */
  soldById?: number;
  /** Customer ID */
  customerId?: number;
  /** Customer name */
  customerName?: string;
  /** Order status */
  status: number;
  /** Order status value (text) */
  statusValue: string;
  /** Total amount */
  total: number;
  /** Total payment amount */
  totalPayment: number;
  /** Total quantity */
  totalQuantity: number;
  /** History note */
  historyNote?: string;
  /** Dining option */
  dinningOption?: number;
  /** Order details (line items) */
  orderDetails: Array<{
    uuid: string;
    productId: number;
    quantity: number;
    price: number;
    note?: string;
    isStartTimeCounter: boolean;
    timeStartCounter?: string;
    timeEndCounter?: string;
  }>;
  /** Delivery information */
  orderDelivery?: {
    price: number;
    receiver: string;
    contactNumber: string;
    address: string;
    locationName: string;
    wardName: string;
    deliveryCode: string;
    deliveryBy: number;
    expectedDelivery?: string;
    status: number;
    partnerDelivery?: OrderPartnerDelivery;
  };
}

/** @deprecated Use Order instead */
export type OrderResponse = Order;

/** Query parameters for listing orders */
export interface OrderListParams {
  /** Filter by branch IDs */
  branchIds?: number[];
  /** Filter by customer IDs */
  customerIds?: number[];
  /** Filter by order status */
  status?: number[];
  /** Filter by last modified date */
  lastModifiedFrom?: string;
  /** From purchase date */
  fromPurchaseDate?: string;
  /** To purchase date */
  toPurchaseDate?: string;
  /** Number of items per page (default 20, max 100) */
  pageSize?: number;
  /** Current item to start from (default 0) */
  currentItem?: number;
  /** Field to order by */
  orderBy?: string;
  /** Order direction: 'Asc' (default) or 'Desc' */
  orderDirection?: 'Asc' | 'Desc';
  /** Include removed IDs */
  includeRemoveIds?: boolean;
}

/** Response for order list */
export interface OrderListResponse {
  /** Total number of orders */
  total: number;
  /** Page size */
  pageSize: number;
  /** Array of orders */
  data: Order[];
  /** IDs of removed orders */
  removedIds?: number[];
  /** Timestamp of the response */
  timestamp?: string;
}
