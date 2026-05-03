/**
 * Surcharge entity (FnB-specific)
 */
export interface Surcharge {
  /** Surcharge ID */
  id: number;
  /** Surcharge name */
  name: string;
  /** Surcharge value (amount) */
  value?: number;
  /** Surcharge rate (percentage) */
  rate?: number;
  /** Whether this is a percentage-based surcharge */
  isPercent?: boolean;
  /** Whether this surcharge is active */
  isActive?: boolean;
  /** Retailer ID */
  retailerId: number;
  /** Last modification date */
  modifiedDate?: string;
  /** Creation date */
  createdDate?: string;
}

/**
 * Query parameters for listing surcharges
 */
export interface SurchargeListParams {
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
 * Response for surcharge list
 */
export interface SurchargeListResponse {
  /** Total number of surcharges */
  total: number;
  /** Page size */
  pageSize: number;
  /** Array of surcharges */
  data: Surcharge[];
  /** IDs of removed surcharges */
  removedIds?: number[];
  /** Timestamp of the response */
  timestamp?: string;
}

/**
 * Response for single surcharge
 */
export interface SurchargeResponse {
  /** Surcharge data */
  data: Surcharge;
}
