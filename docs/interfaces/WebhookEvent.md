[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / WebhookEvent

# Interface: WebhookEvent\<T\>

Defined in: [types/webhook.ts:46](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L46)

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

Defined in: [types/webhook.ts:48](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L48)

***

### Id

> **Id**: `string`

Defined in: [types/webhook.ts:47](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L47)

***

### Notifications

> **Notifications**: `object`[]

Defined in: [types/webhook.ts:49](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L49)

#### Action

> **Action**: `string`

#### Data

> **Data**: `T`[]
