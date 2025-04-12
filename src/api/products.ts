import { HttpClient } from '../utils/http-client';
import { Product, ProductListParams, ProductListResponse, ProductResponse } from '../types/product';

export class ProductsApi {
  private client: HttpClient;
  private baseUrl = '/products';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Get a list of products
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of products
   */
  async list(params?: ProductListParams): Promise<ProductListResponse> {
    const { data } = await this.client.get<ProductListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get a product by ID
   * @param id The ID of the product
   * @returns Promise with the product details
   */
  async get(id: number): Promise<Product> {
    const { data } = await this.client.get<ProductResponse>(`${this.baseUrl}/${id}`);
    return data.data;
  }

  /**
   * Get a product by code
   * @param code The code of the product
   * @returns Promise with the product details
   */
  async getByCode(code: string): Promise<Product> {
    const { data } = await this.client.get<ProductResponse>(`${this.baseUrl}/code/${code}`);
    return data.data;
  }

  /**
   * Get all products for a specific master unit
   * @param masterUnitId The ID of the master unit
   * @param params Additional query parameters
   * @returns Promise with the list of products
   */
  async getByMasterUnit(masterUnitId: number, params?: Omit<ProductListParams, 'masterUnitId'>): Promise<ProductListResponse> {
    const queryParams = { ...params, masterUnitId };
    const { data } = await this.client.get<ProductListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }

  /**
   * Get all products in a specific category
   * @param categoryId The ID of the category
   * @param params Additional query parameters
   * @returns Promise with the list of products
   */
  async getByCategory(categoryId: number, params?: Omit<ProductListParams, 'categoryId'>): Promise<ProductListResponse> {
    const queryParams = { ...params, categoryId };
    const { data } = await this.client.get<ProductListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }
}