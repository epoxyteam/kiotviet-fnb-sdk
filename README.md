# KiotViet FNB SDK

TypeScript/JavaScript SDK for the KiotViet FNB API.

## Installation

```bash
npm install kiotviet-fnb-sdk
```

## Usage

```typescript
import { KiotVietClient } from 'kiotviet-fnb-sdk';

// Initialize the client
const client = new KiotVietClient({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  retailer: 'your-store-name',
  storageType: 'file' // 'file' or 'memory'
});

// Example: Get categories
async function getCategories() {
  try {
    const categories = await client.categories.list({
      pageSize: 20,
      hierarchicalData: true
    });
    console.log(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

// Example: Get category by ID
async function getCategory(id: number) {
  try {
    const category = await client.categories.get(id);
    console.log(category);
  } catch (error) {
    console.error('Error fetching category:', error);
  }
}
```

## Features

- TypeScript support with full type definitions
- Automatic token management
- File-based or in-memory token storage
- Promise-based API
- Error handling and request retries
- WebSocket support for webhooks (coming soon)

## API Support

Currently supported APIs:

- Categories
  - List categories
  - Get category by ID
  - Get category by code

More APIs coming soon:
- Products
- Orders
- Customers
- Webhooks

## Configuration

### Storage Types

- `file`: Stores tokens securely in the filesystem (default)
- `memory`: Stores tokens in memory (cleared on process restart)

### Authentication

The SDK handles OAuth2 authentication automatically. You just need to provide:
- `clientId`: Your KiotViet client ID
- `clientSecret`: Your KiotViet client secret
- `retailer`: Your store name

## Documentation

For detailed API documentation, please see [TypeDoc Documentation](./docs).

## License

MIT