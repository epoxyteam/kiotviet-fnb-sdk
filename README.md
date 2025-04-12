# KiotViet FNB SDK

TypeScript/JavaScript SDK for KiotViet FNB API with real-time webhook support.

## Installation

```bash
npm install kiotviet-fnb-sdk
```

## Quick Start

```typescript
import { KiotVietClient } from 'kiotviet-fnb-sdk';

const client = new KiotVietClient({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  retailer: 'your-store-name'
});
```

## API Documentation

### Categories

```typescript
// List categories
const categories = await client.categories.list({
  pageSize: 20,               // Default: 20, max: 100
  hierarchicalData: true,     // Get nested structure
  orderBy: 'name',           // Sort field
  orderDirection: 'Asc'      // Sort direction: 'Asc' or 'Desc'
});

// Get by ID
const category = await client.categories.get(123);

// Get by code
const categoryByCode = await client.categories.getByCode('CAT001');
```

### Products

```typescript
// List products
const products = await client.products.list({
  pageSize: 20,
  includeInventory: true,     // Include stock info
  includePricebook: true,     // Include price book info
  masterUnitId: 123,         // Filter by master unit
  categoryId: 456            // Filter by category
});

// Get by ID
const product = await client.products.get(123);

// Get by code
const product = await client.products.getByCode('PRD001');

// Get by category
const products = await client.products.getByCategory(456);

// Get by master unit
const products = await client.products.getByMasterUnit(789);
```

### Orders

```typescript
// Create order
const orderId = await client.orders.create({
  branchId: 1,
  customerId: 123,
  orderDetails: [{
    productId: 456,
    quantity: 2,
    price: 100000,
    note: 'Extra spicy',
    rank: 1
  }],
  deliveryDetail: {
    receiver: 'John Doe',
    contactNumber: '0123456789',
    address: '123 Street',
    locationName: 'District 1',
    wardName: 'Ward 1',
    price: 15000,
    status: 3             // 3: Not delivered, 4: Delivering
  }
});

// Get by UUID
const order = await client.orders.getByUuid(orderId);

// List orders
const orders = await client.orders.list({
  branchIds: [1, 2],
  customerIds: [123],
  status: [1, 2],
  includePayment: true,
  pageSize: 20
});

// Get by branches
const branchOrders = await client.orders.getByBranches([1, 2]);

// Get by customers
const customerOrders = await client.orders.getByCustomers([123]);

// Get by status
const statusOrders = await client.orders.getByStatus([1, 2]);
```

### Customers

```typescript
// Create customer
const customer = await client.customers.create({
  code: 'CUST001',
  name: 'John Doe',
  contactNumber: '0123456789',
  email: 'john@example.com',
  address: '123 Street'
});

// Update customer
await client.customers.update(customer.id, {
  name: 'John Smith',
  contactNumber: '0123456789'
});

// Get by ID
const customer = await client.customers.get(123);

// Get by code
const customer = await client.customers.getByCode('CUST001');

// List customers
const customers = await client.customers.list({
  pageSize: 20,
  includeTotal: true,       // Include invoices/points total
  orderBy: 'name'
});

// Search customers
const searchResults = await client.customers.search('John');

// Delete customer
await client.customers.delete(123);
```

### Webhooks & Real-time Updates

```typescript
// Register webhook endpoint
await client.webhooks.register({
  Type: 'product.update',
  Url: 'https://your-webhook.com/endpoint',
  IsActive: true
});

// Connect WebSocket for real-time updates
await client.connectWebSocket({
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
});

// Disconnect WebSocket
client.disconnectWebSocket();
```

## Configuration

```typescript
interface KiotVietClientConfig {
  // Required
  clientId: string;
  clientSecret: string;
  retailer: string;

  // Optional
  storageType?: 'file' | 'memory';  // Default: 'file'
  websocket?: {
    autoReconnect?: boolean;        // Default: true
    reconnectInterval?: number;     // Default: 5000ms
    maxReconnectAttempts?: number;  // Default: 5
  }
}
```

## Storage Types

- `file`: Stores tokens securely in the filesystem (default)
- `memory`: Stores tokens in memory (cleared on process restart)

## License

MIT