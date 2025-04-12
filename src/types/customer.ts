export interface Customer {
  id: number;
  code: string;
  name: string;
  gender?: boolean;
  birthDate?: string;
  contactNumber: string;
  address?: string;
  locationName?: string;
  email?: string;
  organization?: string;
  comment?: string;
  taxCode?: string;
  retailerId: number;
  debt?: number;
  totalInvoiced?: number;
  totalPoint?: number;
  totalRevenue?: number;
  modifiedDate?: string;
  createdDate: string;
}

export interface CreateCustomerRequest {
  code: string;
  name: string;
  gender?: boolean;
  birthDate?: string;
  contactNumber: string;
  address?: string;
  email?: string;
  comment?: string;
}

export interface UpdateCustomerRequest extends CreateCustomerRequest {
  id: number;
}

export interface CustomerListParams {
  code?: string;
  name?: string;
  contactNumber?: string;
  lastModifiedFrom?: string;
  pageSize?: number;
  currentItem?: number;
  orderBy?: string;
  orderDirection?: 'Asc' | 'Desc';
  includeRemoveIds?: boolean;
  includeTotal?: boolean;
}

export interface CustomerListResponse {
  total: number;
  pageSize: number;
  data: Customer[];
  removedIds?: number[];
}

export interface CustomerResponse {
  data: Customer;
}

export interface DeleteCustomerResponse {
  message: string;
}