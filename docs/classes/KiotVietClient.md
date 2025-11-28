[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / KiotVietClient

# Class: KiotVietClient

Defined in: [index.ts:17](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L17)

## Constructors

### Constructor

> **new KiotVietClient**(`config`): `KiotVietClient`

Defined in: [index.ts:29](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L29)

#### Parameters

##### config

[`KiotVietClientConfig`](../interfaces/KiotVietClientConfig.md)

#### Returns

`KiotVietClient`

## Properties

### branches

> `readonly` **branches**: `BranchesApi`

Defined in: [index.ts:26](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L26)

***

### categories

> `readonly` **categories**: `CategoriesApi`

Defined in: [index.ts:21](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L21)

***

### customers

> `readonly` **customers**: `CustomersApi`

Defined in: [index.ts:24](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L24)

***

### invoices

> `readonly` **invoices**: `InvoicesApi`

Defined in: [index.ts:27](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L27)

***

### orders

> `readonly` **orders**: `OrdersApi`

Defined in: [index.ts:23](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L23)

***

### products

> `readonly` **products**: `ProductsApi`

Defined in: [index.ts:22](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L22)

***

### webhooks

> `readonly` **webhooks**: `WebhooksApi`

Defined in: [index.ts:25](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L25)

## Methods

### connectWebSocket()

> **connectWebSocket**(`handlers`): `Promise`\<`void`\>

Defined in: [index.ts:54](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L54)

Connect to the WebSocket server for real-time webhook events

#### Parameters

##### handlers

[`WebSocketEventHandlers`](../interfaces/WebSocketEventHandlers.md)

Event handlers for different webhook events

#### Returns

`Promise`\<`void`\>

***

### disconnectWebSocket()

> **disconnectWebSocket**(): `void`

Defined in: [index.ts:62](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/index.ts#L62)

Disconnect from the WebSocket server

#### Returns

`void`
