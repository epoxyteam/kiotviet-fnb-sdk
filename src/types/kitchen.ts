/**
 * Kitchen ticket detail (FnB-specific)
 */
export interface KitchenTicketDetail {
  /** Product ID */
  productId: number;
  /** Product code */
  productCode: string;
  /** Product name */
  productName: string;
  /** Quantity */
  quantity: number;
  /** Note for the product */
  note?: string;
}

/**
 * Kitchen ticket entity (FnB-specific)
 */
export interface KitchenTicket {
  /** Ticket ID */
  id: number;
  /** Ticket code */
  code: string;
  /** Order ID */
  orderId?: number;
  /** Order code */
  orderCode?: string;
  /** Branch ID */
  branchId: number;
  /** Branch name */
  branchName?: string;
  /** Table ID */
  tableId?: number;
  /** Table name */
  tableName?: string;
  /** Ticket status (1: pending, 2: preparing, 3: done, 4: cancelled) */
  status: number;
  /** Ticket status value (text) */
  statusValue?: string;
  /** Retailer ID */
  retailerId: number;
  /** Ticket details */
  ticketDetails?: KitchenTicketDetail[];
  /** Creation date */
  createdDate?: string;
  /** Last modification date */
  modifiedDate?: string;
}

/**
 * Query parameters for listing kitchen tickets
 */
export interface KitchenTicketListParams {
  /** Filter by branch ID */
  branchId?: number;
  /** Filter by status */
  status?: number[];
  /** Filter by last modified date */
  lastModifiedFrom?: string;
  /** Number of items per page (default 20, max 100) */
  pageSize?: number;
  /** Current item to start from (default 0) */
  currentItem?: number;
  /** Field to order by */
  orderBy?: string;
  /** Order direction: 'Asc' (default) or 'Desc' */
  orderDirection?: 'Asc' | 'Desc';
}

/**
 * Response for kitchen ticket list
 */
export interface KitchenTicketListResponse {
  /** Total number of tickets */
  total: number;
  /** Page size */
  pageSize: number;
  /** Array of kitchen tickets */
  data: KitchenTicket[];
  /** Timestamp of the response */
  timestamp?: string;
}

/**
 * Response for single kitchen ticket
 */
export interface KitchenTicketResponse {
  /** Kitchen ticket data */
  data: KitchenTicket;
}
