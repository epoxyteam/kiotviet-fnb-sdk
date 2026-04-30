import { HttpClient } from '../utils/http-client';
import {
  Order,
  OrderListParams,
  OrderListResponse,
  CreateOrderRequest,
  UpdateOrderRequest
} from '../types/order';

export class OrdersApi {
  private client: HttpClient;
  private baseUrl = '/orders';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Get a list of orders
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of orders
   */
  async list(params?: OrderListParams): Promise<OrderListResponse> {
    const { data } = await this.client.get<OrderListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get an order by ID
   * @param id The ID of the order
   * @returns Promise with the order details
   */
  async get(id: number): Promise<Order> {
    const { data } = await this.client.get<{ data: Order }>(`${this.baseUrl}/${id}`);
    return data.data;
  }

  /**
   * Create a new order
   * @param order The order details to create
   * @returns Promise with the created order
   */
  async create(order: CreateOrderRequest): Promise<Order> {
    const { data } = await this.client.post<{ data: Order }>(this.baseUrl, order);
    return data.data;
  }

  /**
   * Update an existing order
   * @param id The ID of the order to update
   * @param order The order details to update
   * @returns Promise with the updated order
   */
  async update(id: number, order: UpdateOrderRequest): Promise<Order> {
    const { data } = await this.client.put<{ data: Order }>(`${this.baseUrl}/${id}`, order);
    return data.data;
  }

  /**
   * Get order details by UUID
   * @param uuid The UUID of the order
   * @returns Promise with the order details
   * @deprecated Use get(id) instead when possible
   */
  async getByUuid(uuid: string): Promise<Order> {
    const { data } = await this.client.get<{ data: Order }>(`${this.baseUrl}/uuid/${uuid}`);
    return data.data;
  }
}
