import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { TokenManager } from '../auth/types';

export interface HttpClientConfig {
  baseURL: string;
  retailer: string;
  tokenManager: TokenManager;
}

export class HttpClient {
  private client: AxiosInstance;
  private retailer: string;
  readonly tokenManager: TokenManager;

  constructor(config: HttpClientConfig) {
    this.tokenManager = config.tokenManager;
    this.retailer = config.retailer;

    this.client = axios.create({
      baseURL: config.baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.client.interceptors.request.use(
      async (config) => {
        const token = await this.tokenManager.getToken();
        config.headers = config.headers || {};
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['Retailer'] = this.retailer;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config);
  }

  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.post<T>(url, data, config);
  }

  async put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.put<T>(url, data, config);
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(url, config);
  }
}