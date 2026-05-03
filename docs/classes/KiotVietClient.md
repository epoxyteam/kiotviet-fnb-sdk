[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / KiotVietClient

# Class: KiotVietClient

Defined in: [index.ts:21](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L21)

## Constructors

### Constructor

> **new KiotVietClient**(`config`): `KiotVietClient`

Defined in: [index.ts:37](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L37)

#### Parameters

##### config

[`KiotVietClientConfig`](../interfaces/KiotVietClientConfig.md)

#### Returns

`KiotVietClient`

## Properties

### branches

> `readonly` **branches**: `BranchesApi`

Defined in: [index.ts:30](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L30)

***

### categories

> `readonly` **categories**: `CategoriesApi`

Defined in: [index.ts:25](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L25)

***

### customers

> `readonly` **customers**: `CustomersApi`

Defined in: [index.ts:28](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L28)

***

### invoices

> `readonly` **invoices**: `InvoicesApi`

Defined in: [index.ts:31](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L31)

***

### kitchen

> `readonly` **kitchen**: `KitchenApi`

Defined in: [index.ts:35](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L35)

***

### orders

> `readonly` **orders**: `OrdersApi`

Defined in: [index.ts:27](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L27)

***

### products

> `readonly` **products**: `ProductsApi`

Defined in: [index.ts:26](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L26)

***

### surcharges

> `readonly` **surcharges**: `SurchargesApi`

Defined in: [index.ts:33](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L33)

***

### tables

> `readonly` **tables**: `TablesApi`

Defined in: [index.ts:34](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L34)

***

### users

> `readonly` **users**: `UsersApi`

Defined in: [index.ts:32](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L32)

***

### webhooks

> `readonly` **webhooks**: `WebhooksApi`

Defined in: [index.ts:29](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L29)

## Methods

### connectWebSocket()

> **connectWebSocket**(`handlers`): `Promise`\<`void`\>

Defined in: [index.ts:66](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L66)

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

Defined in: [index.ts:74](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/index.ts#L74)

Disconnect from the WebSocket server

#### Returns

`void`
