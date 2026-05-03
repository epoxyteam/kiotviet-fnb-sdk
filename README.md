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

// Create product
const newProduct = await client.products.create({
  code: 'PRD002',
  name: 'New Product',
  basePrice: 50000
});

// Update product
const updated = await client.products.update(123, { basePrice: 60000 });

// Delete product
await client.products.delete(123);

// Get by category
const products = await client.products.getByCategory(456);

// Get by master unit
const products = await client.products.getByMasterUnit(789);
```

### Orders

```typescript
// List orders
const orders = await client.orders.list({
  pageSize: 20,
  branchIds: [1, 2],
  status: [1, 2],
  fromPurchaseDate: '2024-01-01',
  toPurchaseDate: '2024-12-31'
});

// Get order by ID
const order = await client.orders.get(123);

// Create order
const newOrder = await client.orders.create({
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

// Update order
const updatedOrder = await client.orders.update(123, { status: 2 });

// Get order by UUID
const order = await client.orders.getByUuid('some-uuid');
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

### Branches

```typescript
// List all branches
const branches = await client.branches.list({
  pageSize: 20,
  orderBy: 'branchName',
  orderDirection: 'Asc'
});

// Get all branches (without pagination)
const allBranches = await client.branches.getAll();

// Get by ID
const branch = await client.branches.get(1);

// Get by retailer ID
const retailerBranches = await client.branches.getByRetailer(123);
```

### Invoices

```typescript
// List invoices
const invoices = await client.invoices.list({
  pageSize: 20,
  includePayment: true,
  includeInvoiceDelivery: true,
  branchIds: [1, 2],
  customerIds: [123],
  status: [1, 2],
  SaleChannel: true        // Include sale channel info
});

// Get by ID
const invoice = await client.invoices.get(123);

// Get by code
const invoice = await client.invoices.getByCode('INV001');

// Create invoice
const newInvoice = await client.invoices.create({
  branchId: 1,
  customerId: 123,
  invoiceDetails: [{
    productId: 456,
    quantity: 1,
    price: 100000
  }],
  payments: [{
    method: 'Cash',
    amount: 100000
  }]
});

// Get by branches
const branchInvoices = await client.invoices.getByBranches([1, 2]);

// Get by customers
const customerInvoices = await client.invoices.getByCustomers([123]);

// Get by customer code
const invoices = await client.invoices.getByCustomerCode('CUST001');

// Get by status
const statusInvoices = await client.invoices.getByStatus([1, 2]);

// Get by order ID
const orderInvoices = await client.invoices.getByOrderId(456);

// Get by date range
const dateInvoices = await client.invoices.getByDateRange(
  '2024-01-01',
  '2024-12-31'
);
```

### Webhooks & Real-time Updates

```typescript
// List registered webhooks
const webhooks = await client.webhooks.list();

// Register webhook endpoint
await client.webhooks.register({
  Type: 'product.update',
  Url: 'https://your-webhook.com/endpoint',
  IsActive: true
});

// Unregister webhook
await client.webhooks.unregister(123);

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

### Users

```typescript
// List users
const users = await client.users.list({ pageSize: 20 });

// Get user by ID
const user = await client.users.get(123);
```

### Surcharges

```typescript
// List surcharges
const surcharges = await client.surcharges.list({ pageSize: 20 });

// Get surcharge by ID
const surcharge = await client.surcharges.get(123);
```

### Tables (FnB-specific)

```typescript
// List tables
const tables = await client.tables.list({
  pageSize: 20,
  branchId: 1,
  zoneId: 2
});

// Get table by ID
const table = await client.tables.get(123);
```

### Kitchen (FnB-specific)

```typescript
// List kitchen tickets
const tickets = await client.kitchen.list({
  pageSize: 20,
  branchId: 1,
  status: [1, 2]   // 1: pending, 2: preparing, 3: done, 4: cancelled
});

// Get kitchen ticket by ID
const ticket = await client.kitchen.get(123);
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