import { HttpClient } from '../utils/http-client';
import { Category, CategoryListParams, CategoryListResponse, CategoryResponse } from '../types/category';

export class CategoriesApi {
  private client: HttpClient;
  private baseUrl = '/categories';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Get a list of categories
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of categories
   */
  async list(params?: CategoryListParams): Promise<CategoryListResponse> {
    const { data } = await this.client.get<CategoryListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get a category by ID
   * @param id The ID of the category
   * @returns Promise with the category details
   */
  async get(id: number): Promise<Category> {
    const { data } = await this.client.get<CategoryResponse>(`${this.baseUrl}/${id}`);
    return data.data;
  }

  /**
   * Get a category by code
   * @param code The code of the category
   * @returns Promise with the category details
   */
  async getByCode(code: string): Promise<Category> {
    const { data } = await this.client.get<CategoryResponse>(`${this.baseUrl}/code/${code}`);
    return data.data;
  }
}