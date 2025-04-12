export interface OrderDetail {
  productId: number;
  quantity: number;
  price: number;
  note?: string;
  rank: number;
}

export interface PartnerDelivery {
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
  partnerDelivery?: PartnerDelivery;
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

export interface OrderResponse {
  id: number;
  code: string;
  purchaseDate: string;
  retailerId: number;
  branchId: number;
  soldById?: number;
  customerId?: number;
  customerName?: string;
  status: number;
  statusValue: string;
  total: number;
  totalPayment: number;
  totalQuantity: number;
  historyNote?: string;
  dinningOption?: number;
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
    partnerDelivery?: PartnerDelivery;
  };
}

export interface OrderListParams {
  branchIds?: number[];
  customerIds?: number[];
  customerCode?: string;
  status?: number[];
  includePayment?: boolean;
  includeInvoiceDelivery?: boolean;
  lastModifiedFrom?: string;
  pageSize?: number;
  currentItem?: number;
  toDate?: string;
  orderBy?: string;
  orderDirection?: 'Asc' | 'Desc';
  orderId?: number;
  createdDate?: string;
  fromPurchaseDate?: string;
  toPurchaseDate?: string;
}

export interface OrderListResponse {
  total: number;
  pageSize: number;
  data: OrderResponse[];
}