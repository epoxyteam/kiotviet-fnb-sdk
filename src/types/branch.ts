/**
 * Branch entity
 */
export interface Branch {
  /** ID of the branch */
  id: number;
  /** Branch name */
  branchName: string;
  /** Branch address */
  address: string;
  /** District or province name */
  locationName: string;
  /** Ward or commune name */
  wardName: string;
  /** Retailer ID */
  retailerId: number;
  /** Contact email */
  email: string;
  /** Last modification date */
  modifiedDate?: string;
  /** Creation date */
  createdDate?: string;
}

/**
 * Query parameters for listing branches
 */
export interface BranchListParams {
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
 * Response for branch list
 */
export interface BranchListResponse {
  /** Total number of branches */
  total: number;
  /** Page size */
  pageSize: number;
  /** Array of branches */
  data: Branch[];
  /** Timestamp of the response */
  timestamp: string;
}

/**
 * Response for single branch
 */
export interface BranchResponse {
  /** Branch data */
  data: Branch;
}
