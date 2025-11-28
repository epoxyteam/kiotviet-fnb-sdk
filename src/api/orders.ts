import { HttpClient } from '../utils/http-client';
import {
  CreateOrderRequest,
  OrderResponse
} from '../types/order';

export class OrdersApi {
  private client: HttpClient;
  private baseUrl = '/orders';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Create a new order
   * @param order The order details to create
   * @returns Promise with the created order's UUID
   */
  async create(order: CreateOrderRequest): Promise<string> {
    const { data } = await this.client.post<string>(`${this.baseUrl}/create`, order);
    return data;
  }

  /**
   * Get order details by UUID
   * @param uuid The UUID of the order
   * @returns Promise with the order details
   */
  async getByUuid(uuid: string): Promise<OrderResponse> {
    const { data } = await this.client.get<OrderResponse>(`${this.baseUrl}/uuid/${uuid}`);
    return data;
  }
}
