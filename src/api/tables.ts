import { HttpClient } from '../utils/http-client';
import {
  Table,
  TableListParams,
  TableListResponse,
  TableResponse
} from '../types/table';

export class TablesApi {
  private client: HttpClient;
  private baseUrl = '/tables';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Get a list of tables
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of tables
   */
  async list(params?: TableListParams): Promise<TableListResponse> {
    const { data } = await this.client.get<TableListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get a table by ID
   * @param id The ID of the table
   * @returns Promise with the table details
   */
  async get(id: number): Promise<Table> {
    const { data } = await this.client.get<TableResponse>(`${this.baseUrl}/${id}`);
    return data.data;
  }
}
