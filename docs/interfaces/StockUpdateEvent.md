[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / StockUpdateEvent

# Interface: StockUpdateEvent

Defined in: [types/webhook.ts:101](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L101)

## Extends

- [`WebhookEvent`](WebhookEvent.md)

## Properties

### Attempt

> **Attempt**: `number`

Defined in: [types/webhook.ts:48](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L48)

#### Inherited from

[`WebhookEvent`](WebhookEvent.md).[`Attempt`](WebhookEvent.md#attempt)

***

### Data

> **Data**: `object`[]

Defined in: [types/webhook.ts:102](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L102)

#### BranchId

> **BranchId**: `number`

#### BranchName

> **BranchName**: `string`

#### Cost

> **Cost**: `number`

#### OnHand

> **OnHand**: `number`

#### ProductCode

> **ProductCode**: `string`

#### ProductId

> **ProductId**: `number`

#### ProductName

> **ProductName**: `string`

#### Reserved

> **Reserved**: `number`

***

### Id

> **Id**: `string`

Defined in: [types/webhook.ts:47](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L47)

#### Inherited from

[`WebhookEvent`](WebhookEvent.md).[`Id`](WebhookEvent.md#id)

***

### Notifications

> **Notifications**: `object`[]

Defined in: [types/webhook.ts:49](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L49)

#### Action

> **Action**: `string`

#### Data

> **Data**: `any`[]

#### Inherited from

[`WebhookEvent`](WebhookEvent.md).[`Notifications`](WebhookEvent.md#notifications)
