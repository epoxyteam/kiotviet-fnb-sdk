import { HttpClient } from '../utils/http-client';
import {
  Surcharge,
  SurchargeListParams,
  SurchargeListResponse,
  SurchargeResponse
} from '../types/surcharge';

export class SurchargesApi {
  private client: HttpClient;
  private baseUrl = '/surcharges';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Get a list of surcharges
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of surcharges
   */
  async list(params?: SurchargeListParams): Promise<SurchargeListResponse> {
    const { data } = await this.client.get<SurchargeListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get a surcharge by ID
   * @param id The ID of the surcharge
   * @returns Promise with the surcharge details
   */
  async get(id: number): Promise<Surcharge> {
    const { data } = await this.client.get<SurchargeResponse>(`${this.baseUrl}/${id}`);
    return data.data;
  }
}
