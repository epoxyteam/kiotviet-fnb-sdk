# KiotViet FNB SDK

TypeScript/JavaScript SDK for the KiotViet FNB API with full type support and real-time webhook capabilities.

## Installation

```bash
npm install kiotviet-fnb-sdk
```

## Features

- 🔒 Automatic token management with secure storage
- 📦 Full TypeScript support with extensive type definitions
- 🔄 Real-time updates via WebSocket
- 💾 Multiple storage options (file/memory)
- 🚀 Promise-based API
- 📝 Comprehensive documentation

## Usage

### Basic Setup

```typescript
import { KiotVietClient } from 'kiotviet-fnb-sdk';

const client = new KiotVietClient({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  retailer: 'your-store-name',
  storageType: 'file' // 'file' or 'memory'
});
```

### Categories

```typescript
// List categories
const categories = await client.categories.list({
  pageSize: 20,
  hierarchicalData: true
});

// Get category by ID
const category = await client.categories.get(123);

// Get category by code
const categoryByCode = await client.categories.getByCode('CAT001');
```

### Products

```typescript
// List products
const products = await client.products.list({
  pageSize: 20,
  includeInventory: true,
  includePricebook: true
});

// Get product by ID
const product = await client.products.get(123);

// Get products by category
const categoryProducts = await client.products.getByCategory(456, {
  pageSize: 20
});
```

### Orders

```typescript
// Create order
const order = await client.orders.create({
  branchId: 1,
  customerId: 123,
  orderDetails: [
    {
      productId: 456,
      quantity: 2,
      price: 100000,
      rank: 1
    }
  ]
});

// Get order by UUID
const orderDetails = await client.orders.getByUuid(order);

// List orders
const orders = await client.orders.list({
  pageSize: 20,
  includePayment: true
});
```

### Customers

```typescript
// Create customer
const customer = await client.customers.create({
  code: 'CUST001',
  name: 'John Doe',
  contactNumber: '0123456789'
});

// Update customer
await client.customers.update(customer.id, {
  name: 'John Smith',
  contactNumber: '0123456789'
});

// Search customers
const customers = await client.customers.search('John', {
  pageSize: 20
});
```

### Real-time Webhooks

```typescript
// Configure webhook handlers
const handlers = {
  onProductUpdate: (products) => {
    console.log('Products updated:', products);
  },
  onCustomerUpdate: (customers) => {
    console.log('Customers updated:', customers);
  },
  onStockUpdate: (stocks) => {
    console.log('Stock levels updated:', stocks);
  },
  onError: (error) => {
    console.error('WebSocket error:', error);
  }
};

// Connect to WebSocket
await client.connectWebSocket(handlers);

// Disconnect when done
client.disconnectWebSocket();

// Register HTTP webhook endpoint
await client.webhooks.register({
  Type: 'product.update',
  Url: 'https://your-webhook-endpoint.com/webhook',
  IsActive: true,
  Description: 'Product updates webhook'
});
```

## Configuration Options

### Client Configuration

```typescript
interface KiotVietClientConfig {
  clientId: string;
  clientSecret: string;
  retailer: string;
  storageType?: 'file' | 'memory';
  websocket?: {
    autoReconnect?: boolean;
    reconnectInterval?: number;
    maxReconnectAttempts?: number;
  };
}
```

### Storage Types

- `file`: Stores tokens securely in the filesystem (default)
- `memory`: Stores tokens in memory (cleared on process restart)

### WebSocket Configuration

```typescript
interface WebSocketConfig {
  autoReconnect?: boolean;      // Enable auto-reconnect (default: true)
  reconnectInterval?: number;    // Milliseconds between attempts (default: 5000)
  maxReconnectAttempts?: number; // Maximum reconnection attempts (default: 5)
}
```

## Error Handling

The SDK throws typed errors that you can handle in your application:

```typescript
try {
  await client.products.get(123);
} catch (error) {
  if (error.response) {
    // API error with response
    console.error('API Error:', error.response.data);
  } else {
    // Network or other error
    console.error('Error:', error.message);
  }
}
```

## Documentation

For detailed API documentation, please see [TypeDoc Documentation](./docs).

## License

MIT