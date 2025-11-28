[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / WebSocketEventHandlers

# Interface: WebSocketEventHandlers

Defined in: [types/webhook.ts:118](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L118)

## Properties

### onClose()?

> `optional` **onClose**: () => `void`

Defined in: [types/webhook.ts:126](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L126)

#### Returns

`void`

***

### onCustomerDelete()?

> `optional` **onCustomerDelete**: (`data`) => `void`

Defined in: [types/webhook.ts:120](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L120)

#### Parameters

##### data

`number`[]

#### Returns

`void`

***

### onCustomerUpdate()?

> `optional` **onCustomerUpdate**: (`data`) => `void`

Defined in: [types/webhook.ts:119](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L119)

#### Parameters

##### data

`object`[]

#### Returns

`void`

***

### onError()?

> `optional` **onError**: (`error`) => `void`

Defined in: [types/webhook.ts:124](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L124)

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### onProductDelete()?

> `optional` **onProductDelete**: (`data`) => `void`

Defined in: [types/webhook.ts:122](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L122)

#### Parameters

##### data

`number`[]

#### Returns

`void`

***

### onProductUpdate()?

> `optional` **onProductUpdate**: (`data`) => `void`

Defined in: [types/webhook.ts:121](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L121)

#### Parameters

##### data

`object`[]

#### Returns

`void`

***

### onReconnect()?

> `optional` **onReconnect**: () => `void`

Defined in: [types/webhook.ts:125](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L125)

#### Returns

`void`

***

### onStockUpdate()?

> `optional` **onStockUpdate**: (`data`) => `void`

Defined in: [types/webhook.ts:123](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L123)

#### Parameters

##### data

`object`[]

#### Returns

`void`
