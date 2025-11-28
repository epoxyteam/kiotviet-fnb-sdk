[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / OrderResponse

# Interface: OrderResponse

Defined in: [types/order.ts:34](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L34)

## Properties

### branchId

> **branchId**: `number`

Defined in: [types/order.ts:39](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L39)

***

### code

> **code**: `string`

Defined in: [types/order.ts:36](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L36)

***

### customerId?

> `optional` **customerId**: `number`

Defined in: [types/order.ts:41](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L41)

***

### customerName?

> `optional` **customerName**: `string`

Defined in: [types/order.ts:42](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L42)

***

### dinningOption?

> `optional` **dinningOption**: `number`

Defined in: [types/order.ts:49](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L49)

***

### historyNote?

> `optional` **historyNote**: `string`

Defined in: [types/order.ts:48](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L48)

***

### id

> **id**: `number`

Defined in: [types/order.ts:35](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L35)

***

### orderDelivery?

> `optional` **orderDelivery**: `object`

Defined in: [types/order.ts:60](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L60)

#### address

> **address**: `string`

#### contactNumber

> **contactNumber**: `string`

#### deliveryBy

> **deliveryBy**: `number`

#### deliveryCode

> **deliveryCode**: `string`

#### expectedDelivery?

> `optional` **expectedDelivery**: `string`

#### locationName

> **locationName**: `string`

#### partnerDelivery?

> `optional` **partnerDelivery**: [`OrderPartnerDelivery`](OrderPartnerDelivery.md)

#### price

> **price**: `number`

#### receiver

> **receiver**: `string`

#### status

> **status**: `number`

#### wardName

> **wardName**: `string`

***

### orderDetails

> **orderDetails**: `object`[]

Defined in: [types/order.ts:50](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L50)

#### isStartTimeCounter

> **isStartTimeCounter**: `boolean`

#### note?

> `optional` **note**: `string`

#### price

> **price**: `number`

#### productId

> **productId**: `number`

#### quantity

> **quantity**: `number`

#### timeEndCounter?

> `optional` **timeEndCounter**: `string`

#### timeStartCounter?

> `optional` **timeStartCounter**: `string`

#### uuid

> **uuid**: `string`

***

### purchaseDate

> **purchaseDate**: `string`

Defined in: [types/order.ts:37](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L37)

***

### retailerId

> **retailerId**: `number`

Defined in: [types/order.ts:38](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L38)

***

### soldById?

> `optional` **soldById**: `number`

Defined in: [types/order.ts:40](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L40)

***

### status

> **status**: `number`

Defined in: [types/order.ts:43](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L43)

***

### statusValue

> **statusValue**: `string`

Defined in: [types/order.ts:44](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L44)

***

### total

> **total**: `number`

Defined in: [types/order.ts:45](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L45)

***

### totalPayment

> **totalPayment**: `number`

Defined in: [types/order.ts:46](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L46)

***

### totalQuantity

> **totalQuantity**: `number`

Defined in: [types/order.ts:47](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/order.ts#L47)
