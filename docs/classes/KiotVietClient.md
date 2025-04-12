[**KiotViet FNB SDK v1.0.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / KiotVietClient

# Class: KiotVietClient

Defined in: [index.ts:15](https://github.com/doivjpxx/kiotviet-fnb-sdk/blob/bcbd7df6deab54bfd1409ee101bd2b627620e9ef/src/index.ts#L15)

## Constructors

### Constructor

> **new KiotVietClient**(`config`): `KiotVietClient`

Defined in: [index.ts:25](https://github.com/doivjpxx/kiotviet-fnb-sdk/blob/bcbd7df6deab54bfd1409ee101bd2b627620e9ef/src/index.ts#L25)

#### Parameters

##### config

[`KiotVietClientConfig`](../interfaces/KiotVietClientConfig.md)

#### Returns

`KiotVietClient`

## Properties

### categories

> `readonly` **categories**: `CategoriesApi`

Defined in: [index.ts:19](https://github.com/doivjpxx/kiotviet-fnb-sdk/blob/bcbd7df6deab54bfd1409ee101bd2b627620e9ef/src/index.ts#L19)

***

### customers

> `readonly` **customers**: `CustomersApi`

Defined in: [index.ts:22](https://github.com/doivjpxx/kiotviet-fnb-sdk/blob/bcbd7df6deab54bfd1409ee101bd2b627620e9ef/src/index.ts#L22)

***

### orders

> `readonly` **orders**: `OrdersApi`

Defined in: [index.ts:21](https://github.com/doivjpxx/kiotviet-fnb-sdk/blob/bcbd7df6deab54bfd1409ee101bd2b627620e9ef/src/index.ts#L21)

***

### products

> `readonly` **products**: `ProductsApi`

Defined in: [index.ts:20](https://github.com/doivjpxx/kiotviet-fnb-sdk/blob/bcbd7df6deab54bfd1409ee101bd2b627620e9ef/src/index.ts#L20)

***

### webhooks

> `readonly` **webhooks**: `WebhooksApi`

Defined in: [index.ts:23](https://github.com/doivjpxx/kiotviet-fnb-sdk/blob/bcbd7df6deab54bfd1409ee101bd2b627620e9ef/src/index.ts#L23)

## Methods

### connectWebSocket()

> **connectWebSocket**(`handlers`): `Promise`\<`void`\>

Defined in: [index.ts:48](https://github.com/doivjpxx/kiotviet-fnb-sdk/blob/bcbd7df6deab54bfd1409ee101bd2b627620e9ef/src/index.ts#L48)

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

Defined in: [index.ts:56](https://github.com/doivjpxx/kiotviet-fnb-sdk/blob/bcbd7df6deab54bfd1409ee101bd2b627620e9ef/src/index.ts#L56)

Disconnect from the WebSocket server

#### Returns

`void`
