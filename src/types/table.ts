/**
 * Table entity (FnB-specific) — represents a dining table in a restaurant
 */
export interface Table {
  /** Table ID */
  id: number;
  /** Table name */
  name: string;
  /** Table zone/area ID */
  zoneId?: number;
  /** Table zone/area name */
  zoneName?: string;
  /** Branch ID */
  branchId: number;
  /** Branch name */
  branchName?: string;
  /** Number of seats */
  seats?: number;
  /** Table status (0: available, 1: occupied) */
  status?: number;
  /** Retailer ID */
  retailerId: number;
  /** Last modification date */
  modifiedDate?: string;
  /** Creation date */
  createdDate?: string;
}

/**
 * Query parameters for listing tables
 */
export interface TableListParams {
  /** Filter by branch ID */
  branchId?: number;
  /** Filter by zone ID */
  zoneId?: number;
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
  /** Include removed IDs */
  includeRemoveIds?: boolean;
}

/**
 * Response for table list
 */
export interface TableListResponse {
  /** Total number of tables */
  total: number;
  /** Page size */
  pageSize: number;
  /** Array of tables */
  data: Table[];
  /** IDs of removed tables */
  removedIds?: number[];
  /** Timestamp of the response */
  timestamp?: string;
}

/**
 * Response for single table
 */
export interface TableResponse {
  /** Table data */
  data: Table;
}
