[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / ProductUpdateEvent

# Interface: ProductUpdateEvent

Defined in: [types/webhook.ts:70](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L70)

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

Defined in: [types/webhook.ts:71](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/webhook.ts#L71)

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
