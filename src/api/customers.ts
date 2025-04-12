import { HttpClient } from '../utils/http-client';
import {
  Customer,
  CustomerListParams,
  CustomerListResponse,
  CustomerResponse,
  CreateCustomerRequest,
  UpdateCustomerRequest,
  DeleteCustomerResponse
} from '../types/customer';

export class CustomersApi {
  private client: HttpClient;
  private baseUrl = '/customers';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Get a list of customers
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of customers
   */
  async list(params?: CustomerListParams): Promise<CustomerListResponse> {
    const { data } = await this.client.get<CustomerListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get a customer by ID
   * @param id The ID of the customer
   * @returns Promise with the customer details
   */
  async get(id: number): Promise<Customer> {
    const { data } = await this.client.get<CustomerResponse>(`${this.baseUrl}/${id}`);
    return data.data;
  }

  /**
   * Get a customer by code
   * @param code The code of the customer
   * @returns Promise with the customer details
   */
  async getByCode(code: string): Promise<Customer> {
    const { data } = await this.client.get<CustomerResponse>(`${this.baseUrl}/code/${code}`);
    return data.data;
  }

  /**
   * Create a new customer
   * @param customer The customer details to create
   * @returns Promise with the created customer
   */
  async create(customer: CreateCustomerRequest): Promise<Customer> {
    const { data } = await this.client.post<CustomerResponse>(this.baseUrl, customer);
    return data.data;
  }

  /**
   * Update an existing customer
   * @param id The ID of the customer to update
   * @param customer The customer details to update
   * @returns Promise with the updated customer
   */
  async update(id: number, customer: UpdateCustomerRequest): Promise<Customer> {
    const { data } = await this.client.put<CustomerResponse>(`${this.baseUrl}/${id}`, customer);
    return data.data;
  }

  /**
   * Delete a customer
   * @param id The ID of the customer to delete
   * @returns Promise with the deletion message
   */
  async delete(id: number): Promise<DeleteCustomerResponse> {
    const { data } = await this.client.delete<DeleteCustomerResponse>(`${this.baseUrl}/${id}`);
    return data;
  }

  /**
   * Search customers by name or contact number
   * @param searchTerm The name or contact number to search for
   * @param params Additional query parameters
   * @returns Promise with the list of matching customers
   */
  async search(searchTerm: string, params?: Omit<CustomerListParams, 'name' | 'contactNumber'>): Promise<CustomerListResponse> {
    // Try to determine if the search term is a phone number
    const isPhoneNumber = /^\d+$/.test(searchTerm);
    const queryParams = {
      ...params,
      ...(isPhoneNumber ? { contactNumber: searchTerm } : { name: searchTerm })
    };

    const { data } = await this.client.get<CustomerListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }
}