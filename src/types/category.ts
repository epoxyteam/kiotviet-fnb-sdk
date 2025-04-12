export interface Category {
  categoryId: number;
  parentId?: number;
  categoryName: string;
  retailerId: number;
  hasChild?: boolean;
  modifiedDate?: string;
  createdDate: string;
  children?: Category[];
}

export interface CategoryListParams {
  lastModifiedFrom?: string;
  pageSize?: number;
  currentItem?: number;
  orderBy?: string;
  orderDirection?: 'Asc' | 'Desc';
  hierachicalData?: boolean;
}

export interface CategoryListResponse {
  total: number;
  pageSize: number;
  data: Category[];
  removedIds: number[];
  timestamp: string;
}

export interface CategoryResponse {
  data: Category;
}