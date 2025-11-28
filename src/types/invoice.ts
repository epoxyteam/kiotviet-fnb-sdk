/**
 * Invoice payment details
 */
export interface InvoicePayment {
  /** Payment ID */
  id: number;
  /** Payment code */
  code: string;
  /** Payment amount */
  amount: number;
  /** Payment method */
  method: string;
  /** Payment status */
  status?: number;
  /** Payment status value (text) */
  statusValue: string;
  /** Transaction date */
  transDate: string;
  /** Bank account */
  bankAccount: string;
  /** Account ID */
  accountId?: number;
}

/**
 * Invoice order surcharge
 */
export interface InvoiceOrderSurcharge {
  /** Surcharge ID */
  id: number;
  /** Invoice ID */
  invoiceId?: number;
  /** Surcharge ID */
  surchargeId?: number;
  /** Surcharge name */
  surchargeName: string;
  /** Surcharge value */
  surValue?: number;
  /** Surcharge price */
  price?: number;
  /** Creation date */
  createdDate: string;
}

/**
 * Product batch expire information
 */
export interface ProductBatchExpire {
  /** Batch ID */
  id: number;
  /** Product ID */
  productId: number;
  /** Batch name */
  batchName: string;
  /** Full name with virgule */
  fullNameVirgule: string;
  /** Creation date */
  createdDate: string;
  /** Expiration date */
  expireDate: string;
}

/**
 * Invoice detail (line item)
 */
export interface InvoiceDetail {
  /** Product ID */
  productId: number;
  /** Product code */
  productCode: string;
  /** Product name (including attributes and unit) */
  productName: string;
  /** Quantity */
  quantity: number;
  /** Price */
  price: number;
  /** Discount ratio (percentage) */
  discountRatio?: number;
  /** Discount amount */
  discount?: number;
  /** Note for the product */
  note: string;
  /** Serial numbers (IMEI list) */
  serialNumbers: string;
  /** Product batch expire information */
  productBatchExpire?: ProductBatchExpire;
}

/**
 * Sale channel information
 */
export interface SaleChannel {
  /** Is not deleted */
  IsNotDelete: boolean;
  /** Retailer ID */
  RetailerId: number;
  /** Position */
  Position: number;
  /** Is activate */
  IsActivate: boolean;
  /** Created by user ID */
  CreatedBy: number;
  /** Creation date */
  CreatedDate: string;
  /** Sale channel ID */
  Id: number;
  /** Sale channel name */
  Name: string;
}

/**
 * Partner delivery information
 */
export interface PartnerDelivery {
  /** Partner code */
  code: string;
  /** Partner name */
  name: string;
  /** Partner address */
  address: string;
  /** Partner contact number */
  contactNumber: string;
  /** Partner email */
  email: string;
}

/**
 * Invoice delivery information
 */
export interface InvoiceDelivery {
  /** Delivery code */
  deliveryCode: string;
  /** Delivery type */
  type?: number;
  /** Delivery status (1: not delivered, 2: delivering, 3: delivered, 4: returning, 5: returned, 6: cancelled) */
  status: number;
  /** Delivery status value (text) */
  statusValue: string;
  /** Delivery price */
  price?: number;
  /** Receiver name */
  receiver: string;
  /** Contact number */
  contactNumber: string;
  /** Delivery address */
  address: string;
  /** Location ID */
  locationId?: number;
  /** Location name */
  locationName: string;
  /** Using price COD (collect on delivery) */
  usingPriceCod: boolean;
  /** COD payment amount */
  priceCodPayment: number;
  /** Package weight */
  weight?: number;
  /** Package length */
  length?: number;
  /** Package width */
  width?: number;
  /** Package height */
  height?: number;
  /** Partner delivery ID */
  partnerDeliveryId?: number;
  /** Partner delivery information */
  partnerDelivery?: PartnerDelivery;
}

/**
 * Invoice entity
 */
export interface Invoice {
  /** Invoice ID */
  id: number;
  /** Invoice code */
  code: string;
  /** Order code */
  orderCode?: string;
  /** Purchase date */
  purchaseDate: string;
  /** Branch ID */
  branchId: number;
  /** Branch name */
  branchName: string;
  /** Sold by user ID */
  soldById?: number;
  /** Sold by user name */
  soldByName: string;
  /** Customer ID */
  customerId?: number;
  /** Customer code */
  customerCode: string;
  /** Customer name */
  customerName: string;
  /** Total amount customer needs to pay */
  total: number;
  /** Total amount customer has paid */
  totalPayment: number;
  /** Invoice status */
  status: number;
  /** Invoice status value (text) */
  statusValue: string;
  /** Description/note */
  description?: string;
  /** Using COD */
  usingCod: boolean;
  /** Creation date */
  createdDate: string;
  /** Modification date */
  modifiedDate: string;
  /** Payment details */
  payments?: InvoicePayment[];
  /** Invoice order surcharges */
  invoiceOrderSurcharges?: InvoiceOrderSurcharge[];
  /** Invoice details (line items) */
  invoiceDetails?: InvoiceDetail[];
  /** Sale channel information */
  SaleChannel?: SaleChannel;
  /** Invoice delivery information */
  invoiceDelivery?: InvoiceDelivery;
}

/**
 * Query parameters for listing invoices
 */
export interface InvoiceListParams {
  /** Filter by branch IDs */
  branchIds?: number[];
  /** Filter by customer IDs */
  customerIds?: number[];
  /** Filter by customer code */
  customerCode?: string;
  /** Filter by invoice status */
  status?: number[];
  /** Include payment information */
  includePayment?: boolean;
  /** Include invoice delivery information */
  includeInvoiceDelivery?: boolean;
  /** Filter by last modified date */
  lastModifiedFrom?: string;
  /** Filter up to this date */
  toDate?: string;
  /** Number of items per page (default 20, max 100) */
  pageSize?: number;
  /** Current item to start from (default 0) */
  currentItem?: number;
  /** Field to order by */
  orderBy?: string;
  /** Order direction: 'Asc' (default) or 'Desc' */
  orderDirection?: 'Asc' | 'Desc';
  /** Filter by order ID */
  orderId?: number;
  /** Filter by creation date */
  createdDate?: string;
  /** From purchase date */
  fromPurchaseDate?: string;
  /** To purchase date */
  toPurchaseDate?: string;
  /** Include sale channel information (pass 'SaleChannel=true' to include) */
  SaleChannel?: boolean;
}

/**
 * Response for invoice list
 */
export interface InvoiceListResponse {
  /** Total number of invoices */
  total: number;
  /** Page size */
  pageSize: number;
  /** Array of invoices */
  data: Invoice[];
}

/**
 * Response for single invoice
 */
export interface InvoiceResponse {
  /** Invoice data */
  data: Invoice;
}
