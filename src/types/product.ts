export interface ProductAttribute {
  productId: number;
  attributeName: string;
  attributeValue: string;
}

export interface ProductUnit {
  id: number;
  code: string;
  name: string;
  fullName: string;
  unit: string;
  conversionValue: number;
  basePrice: number;
}

export interface ProductInventory {
  productId: number;
  productCode: string;
  productName: string;
  branchId: number;
  branchName: string;
  onHand?: number;
  cost?: number;
  reserved: number;
}

export interface PriceBook {
  priceBookId: number;
  priceBookName: string;
  productId: number;
  isActive: boolean;
  startDate?: string;
  endDate?: string;
  price: number;
}

export interface ProductTopping {
  id: number;
  retailerId: number;
  code: string;
  name: string;
  fullName: string;
  categoryId: number;
  basePrice: number;
}

export interface ProductFormula {
  id: number;
  retailerId: number;
  code: string;
  name: string;
  fullName: string;
  categoryId: number;
  basePrice: number;
  quantity: number;
}

export interface Product {
  id: number;
  code: string;
  retailerId: number;
  allowsSale: boolean;
  name: string;
  categoryId: number;
  categoryName: string;
  productType?: number;
  isTopping?: boolean;
  isProcessedGoods?: boolean;
  isTimeType?: boolean;
  isRewardPoint?: boolean;
  fullName: string;
  description?: string;
  orderTemplate?: string;
  hasVariants?: boolean;
  attributes?: ProductAttribute[];
  unit: string;
  masterUnitId: number;
  masterProductId?: number;
  conversionValue: number;
  units?: ProductUnit[];
  images?: { image: string }[];
  inventories?: ProductInventory[];
  priceBooks?: PriceBook[];
  toppings?: ProductTopping[];
  formulas?: ProductFormula[];
  basePrice?: number;
  isTimeServices?: boolean;
  weight?: number;
  modifiedDate: string;
}

export interface ProductListParams {
  orderBy?: string;
  lastModifiedFrom?: string;
  pageSize?: number;
  currentItem?: number;
  includeInventory?: boolean;
  includePricebook?: boolean;
  includeBatchExpires?: boolean;
  masterUnitId?: number;
  categoryId?: number;
  orderDirection?: 'Asc' | 'Desc';
}

export interface ProductListResponse {
  total: number;
  pageSize: number;
  data: Product[];
  removedIds: number[];
  timestamp: string;
}

export interface ProductResponse {
  data: Product;
}