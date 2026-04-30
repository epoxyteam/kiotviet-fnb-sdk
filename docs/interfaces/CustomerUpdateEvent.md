[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / CustomerUpdateEvent

# Interface: CustomerUpdateEvent

Defined in: [types/webhook.ts:55](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L55)

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

Defined in: [types/webhook.ts:56](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/webhook.ts#L56)

#### Address?

> `optional` **Address**: `string`

#### BirthDate?

> `optional` **BirthDate**: `string`

#### Code

> **Code**: `string`

#### Comments?

> `optional` **Comments**: `string`

#### ContactNumber

> **ContactNumber**: `string`

#### Email?

> `optional` **Email**: `string`

#### Gender?

> `optional` **Gender**: `boolean`

#### Id

> **Id**: `number`

#### LocationName?

> `optional` **LocationName**: `string`

#### ModifiedDate

> **ModifiedDate**: `string`

#### Name

> **Name**: `string`

#### Organization?

> `optional` **Organization**: `string`

#### TaxCode?

> `optional` **TaxCode**: `string`

#### Type?

> `optional` **Type**: `number`

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
