import { HttpClient } from '../utils/http-client';
import {
  Invoice,
  InvoiceListParams,
  InvoiceListResponse,
  InvoiceResponse,
  CreateInvoiceRequest
} from '../types/invoice';

export class InvoicesApi {
  private client: HttpClient;
  private baseUrl = '/invoices';

  constructor(client: HttpClient) {
    this.client = client;
  }

  /**
   * Get a list of invoices
   * @param params Query parameters for filtering and pagination
   * @returns Promise with the list of invoices
   */
  async list(params?: InvoiceListParams): Promise<InvoiceListResponse> {
    const { data } = await this.client.get<InvoiceListResponse>(this.baseUrl, { params });
    return data;
  }

  /**
   * Get an invoice by ID
   * @param id The ID of the invoice
   * @returns Promise with the invoice details
   */
  async get(id: number): Promise<Invoice> {
    const { data } = await this.client.get<InvoiceResponse>(`${this.baseUrl}/${id}`);
    return data.data;
  }

  /**
   * Get an invoice by code
   * @param code The code of the invoice
   * @returns Promise with the invoice details
   */
  async getByCode(code: string): Promise<Invoice> {
    const { data } = await this.client.get<InvoiceResponse>(`${this.baseUrl}/code/${code}`);
    return data.data;
  }

  /**
   * Create a new invoice
   * @param invoice The invoice details to create
   * @returns Promise with the created invoice
   */
  async create(invoice: CreateInvoiceRequest): Promise<Invoice> {
    const { data } = await this.client.post<InvoiceResponse>(this.baseUrl, invoice);
    return data.data;
  }

  /**
   * Get invoices for specific branches
   * @param branchIds Array of branch IDs
   * @param params Additional query parameters
   * @returns Promise with the list of invoices
   */
  async getByBranches(branchIds: number[], params?: Omit<InvoiceListParams, 'branchIds'>): Promise<InvoiceListResponse> {
    const queryParams = { ...params, branchIds };
    const { data } = await this.client.get<InvoiceListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }

  /**
   * Get invoices for specific customers
   * @param customerIds Array of customer IDs
   * @param params Additional query parameters
   * @returns Promise with the list of invoices
   */
  async getByCustomers(customerIds: number[], params?: Omit<InvoiceListParams, 'customerIds'>): Promise<InvoiceListResponse> {
    const queryParams = { ...params, customerIds };
    const { data } = await this.client.get<InvoiceListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }

  /**
   * Get invoices by customer code
   * @param customerCode Customer code
   * @param params Additional query parameters
   * @returns Promise with the list of invoices
   */
  async getByCustomerCode(customerCode: string, params?: Omit<InvoiceListParams, 'customerCode'>): Promise<InvoiceListResponse> {
    const queryParams = { ...params, customerCode };
    const { data } = await this.client.get<InvoiceListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }

  /**
   * Get invoices by status
   * @param status Array of status values
   * @param params Additional query parameters
   * @returns Promise with the list of invoices
   */
  async getByStatus(status: number[], params?: Omit<InvoiceListParams, 'status'>): Promise<InvoiceListResponse> {
    const queryParams = { ...params, status };
    const { data } = await this.client.get<InvoiceListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }

  /**
   * Get invoices by order ID
   * @param orderId Order ID
   * @param params Additional query parameters
   * @returns Promise with the list of invoices
   */
  async getByOrderId(orderId: number, params?: Omit<InvoiceListParams, 'orderId'>): Promise<InvoiceListResponse> {
    const queryParams = { ...params, orderId };
    const { data } = await this.client.get<InvoiceListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }

  /**
   * Get invoices within a date range
   * @param fromDate From purchase date
   * @param toDate To purchase date
   * @param params Additional query parameters
   * @returns Promise with the list of invoices
   */
  async getByDateRange(fromDate: string, toDate: string, params?: Omit<InvoiceListParams, 'fromPurchaseDate' | 'toPurchaseDate'>): Promise<InvoiceListResponse> {
    const queryParams = { ...params, fromPurchaseDate: fromDate, toPurchaseDate: toDate };
    const { data } = await this.client.get<InvoiceListResponse>(this.baseUrl, { params: queryParams });
    return data;
  }
}
