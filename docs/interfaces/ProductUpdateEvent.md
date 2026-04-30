[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / ProductUpdateEvent

# Interface: ProductUpdateEvent

Defined in: [types/webhook.ts:78](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L78)

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

Defined in: [types/webhook.ts:79](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L79)

#### AllowsSale

> **AllowsSale**: `boolean`

#### BasePrice

> **BasePrice**: `number`

#### CategoryId

> **CategoryId**: `number`

#### CategoryName

> **CategoryName**: `string`

#### Code

> **Code**: `string`

#### ConversionValue

> **ConversionValue**: `number`

#### FullName

> **FullName**: `string`

#### HasVariants

> **HasVariants**: `boolean`

#### Id

> **Id**: `number`

#### MasterUnitId?

> `optional` **MasterUnitId**: `number`

#### ModifiedDate

> **ModifiedDate**: `string`

#### Name

> **Name**: `string`

#### Unit

> **Unit**: `string`

#### Weight?

> `optional` **Weight**: `number`

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
