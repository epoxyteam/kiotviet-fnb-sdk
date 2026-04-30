import { HttpClient } from '../utils/http-client';
import {
  User,
  UserListParams,
  UserListResponse,
  UserResponse
} from '../types/user';

export class UsersApi {
  private client: HttpClient;
  private baseUrl = '/users';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Get a list of users
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of users
   */
  async list(params?: UserListParams): Promise<UserListResponse> {
    const { data } = await this.client.get<UserListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get a user by ID
   * @param id The ID of the user
   * @returns Promise with the user details
   */
  async get(id: number): Promise<User> {
    const { data } = await this.client.get<UserResponse>(`${this.baseUrl}/${id}`);
    return data.data;
  }
}
