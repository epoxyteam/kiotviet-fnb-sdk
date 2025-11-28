[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / WebhookEvent

# Interface: WebhookEvent\<T\>

Defined in: [types/webhook.ts:38](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L38)

## Extended by

- [`CustomerUpdateEvent`](CustomerUpdateEvent.md)
- [`ProductUpdateEvent`](ProductUpdateEvent.md)
- [`StockUpdateEvent`](StockUpdateEvent.md)

## Type Parameters

### T

`T` = `any`

## Properties

### Attempt

> **Attempt**: `number`

Defined in: [types/webhook.ts:40](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L40)

***

### Id

> **Id**: `string`

Defined in: [types/webhook.ts:39](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L39)

***

### Notifications

> **Notifications**: `object`[]

Defined in: [types/webhook.ts:41](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L41)

#### Action

> **Action**: `string`

#### Data

> **Data**: `T`[]
