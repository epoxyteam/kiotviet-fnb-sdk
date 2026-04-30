[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / WebSocketEventHandlers

# Interface: WebSocketEventHandlers

Defined in: [types/webhook.ts:126](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L126)

## Properties

### onClose()?

> `optional` **onClose**: () => `void`

Defined in: [types/webhook.ts:134](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L134)

#### Returns

`void`

***

### onCustomerDelete()?

> `optional` **onCustomerDelete**: (`data`) => `void`

Defined in: [types/webhook.ts:128](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L128)

#### Parameters

##### data

`number`[]

#### Returns

`void`

***

### onCustomerUpdate()?

> `optional` **onCustomerUpdate**: (`data`) => `void`

Defined in: [types/webhook.ts:127](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L127)

#### Parameters

##### data

`object`[]

#### Returns

`void`

***

### onError()?

> `optional` **onError**: (`error`) => `void`

Defined in: [types/webhook.ts:132](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L132)

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### onProductDelete()?

> `optional` **onProductDelete**: (`data`) => `void`

Defined in: [types/webhook.ts:130](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L130)

#### Parameters

##### data

`number`[]

#### Returns

`void`

***

### onProductUpdate()?

> `optional` **onProductUpdate**: (`data`) => `void`

Defined in: [types/webhook.ts:129](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L129)

#### Parameters

##### data

`object`[]

#### Returns

`void`

***

### onReconnect()?

> `optional` **onReconnect**: () => `void`

Defined in: [types/webhook.ts:133](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L133)

#### Returns

`void`

***

### onStockUpdate()?

> `optional` **onStockUpdate**: (`data`) => `void`

Defined in: [types/webhook.ts:131](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L131)

#### Parameters

##### data

`object`[]

#### Returns

`void`
