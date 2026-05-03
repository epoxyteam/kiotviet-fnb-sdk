import { HttpClient } from '../utils/http-client';
import {
  KitchenTicket,
  KitchenTicketListParams,
  KitchenTicketListResponse,
  KitchenTicketResponse
} from '../types/kitchen';

export class KitchenApi {
  private client: HttpClient;
  private baseUrl = '/kitchen-tickets';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Get a list of kitchen tickets
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of kitchen tickets
   */
  async list(params?: KitchenTicketListParams): Promise<KitchenTicketListResponse> {
    const { data } = await this.client.get<KitchenTicketListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get a kitchen ticket by ID
   * @param id The ID of the kitchen ticket
   * @returns Promise with the kitchen ticket details
   */
  async get(id: number): Promise<KitchenTicket> {
    const { data } = await this.client.get<KitchenTicketResponse>(`${this.baseUrl}/${id}`);
    return data.data;
  }
}
