import { HttpClient } from '../utils/http-client';
import { 
  CreateOrderRequest, 
  OrderResponse, 
  OrderListParams,
  OrderListResponse
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

  /**
   * Get order details by ID
   * @param id The ID of the order
   * @returns Promise with the order details
   */
  async get(id: number): Promise<OrderResponse> {
    const { data } = await this.client.get<OrderResponse>(`${this.baseUrl}/${id}`);
    return data;
  }

  /**
   * Get a list of orders with optional filters
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of orders
   */
  async list(params?: OrderListParams): Promise<OrderListResponse> {
    const { data } = await this.client.get<OrderListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get orders for specific branches
   * @param branchIds Array of branch IDs
   * @param params Additional query parameters
   * @returns Promise with the list of orders
   */
  async getByBranches(branchIds: number[], params?: Omit<OrderListParams, 'branchIds'>): Promise<OrderListResponse> {
    const queryParams = { ...params, branchIds };
    const { data } = await this.client.get<OrderListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }

  /**
   * Get orders for specific customers
   * @param customerIds Array of customer IDs
   * @param params Additional query parameters
   * @returns Promise with the list of orders
   */
  async getByCustomers(customerIds: number[], params?: Omit<OrderListParams, 'customerIds'>): Promise<OrderListResponse> {
    const queryParams = { ...params, customerIds };
    const { data } = await this.client.get<OrderListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }

  /**
   * Get orders by status
   * @param status Array of status values
   * @param params Additional query parameters
   * @returns Promise with the list of orders
   */
  async getByStatus(status: number[], params?: Omit<OrderListParams, 'status'>): Promise<OrderListResponse> {
    const queryParams = { ...params, status };
    const { data } = await this.client.get<OrderListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }
}