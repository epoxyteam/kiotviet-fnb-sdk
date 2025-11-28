import { HttpClient } from '../utils/http-client';
import {
  Branch,
  BranchListParams,
  BranchListResponse
} from '../types/branch';

export class BranchesApi {
  private client: HttpClient;
  private baseUrl = '/branches';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Get a list of branches
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of branches
   */
  async list(params?: BranchListParams): Promise<BranchListResponse> {
    const { data } = await this.client.get<BranchListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get all branches (convenience method that fetches all branches without pagination)
   * @returns Promise with all branches
   */
  async getAll(): Promise<Branch[]> {
    const response = await this.list({ pageSize: 100 });
    return response.data;
  }

  /**
   * Get a branch by ID
   * @param id The ID of the branch
   * @returns Promise with the branch details or undefined if not found
   */
  async get(id: number): Promise<Branch | undefined> {
    const branches = await this.getAll();
    return branches.find(branch => branch.id === id);
  }

  /**
   * Get branches by retailer ID
   * @param retailerId The retailer ID to filter by
   * @returns Promise with the list of branches for the retailer
   */
  async getByRetailer(retailerId: number): Promise<Branch[]> {
    const branches = await this.getAll();
    return branches.filter(branch => branch.retailerId === retailerId);
  }
}
