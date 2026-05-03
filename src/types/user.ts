/**
 * User entity
 */
export interface User {
  /** User ID */
  id: number;
  /** User name (login name) */
  userName: string;
  /** Given name */
  givenName: string;
  /** Branch ID the user belongs to */
  branchId?: number;
  /** Branch name */
  branchName?: string;
  /** User email */
  email?: string;
  /** User role ID */
  roleId?: number;
  /** User role name */
  roleName?: string;
  /** Last modification date */
  modifiedDate?: string;
  /** Creation date */
  createdDate?: string;
  /** Whether user is active */
  isActive?: boolean;
  /** Retailer ID */
  retailerId: number;
}

/**
 * Query parameters for listing users
 */
export interface UserListParams {
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
 * Response for user list
 */
export interface UserListResponse {
  /** Total number of users */
  total: number;
  /** Page size */
  pageSize: number;
  /** Array of users */
  data: User[];
  /** IDs of removed users */
  removedIds?: number[];
  /** Timestamp of the response */
  timestamp?: string;
}

/**
 * Response for single user
 */
export interface UserResponse {
  /** User data */
  data: User;
}
