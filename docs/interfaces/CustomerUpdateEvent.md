[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / CustomerUpdateEvent

# Interface: CustomerUpdateEvent

Defined in: [types/webhook.ts:47](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L47)

## Extends

- [`WebhookEvent`](WebhookEvent.md)

## Properties

### Attempt

> **Attempt**: `number`

Defined in: [types/webhook.ts:40](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L40)

#### Inherited from

[`WebhookEvent`](WebhookEvent.md).[`Attempt`](WebhookEvent.md#attempt)

***

### Data

> **Data**: `object`[]

Defined in: [types/webhook.ts:48](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L48)

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

Defined in: [types/webhook.ts:39](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L39)

#### Inherited from

[`WebhookEvent`](WebhookEvent.md).[`Id`](WebhookEvent.md#id)

***

### Notifications

> **Notifications**: `object`[]

Defined in: [types/webhook.ts:41](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L41)

#### Action

> **Action**: `string`

#### Data

> **Data**: `any`[]

#### Inherited from

[`WebhookEvent`](WebhookEvent.md).[`Notifications`](WebhookEvent.md#notifications)
