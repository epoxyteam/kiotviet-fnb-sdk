[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / Order

# Interface: Order

Defined in: [types/order.ts:44](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L44)

Full Order entity returned by list/get endpoints

## Properties

### branchId

> **branchId**: `number`

Defined in: [types/order.ts:54](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L54)

Branch ID

***

### code

> **code**: `string`

Defined in: [types/order.ts:48](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L48)

Order code

***

### customerId?

> `optional` **customerId**: `number`

Defined in: [types/order.ts:58](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L58)

Customer ID

***

### customerName?

> `optional` **customerName**: `string`

Defined in: [types/order.ts:60](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L60)

Customer name

***

### dinningOption?

> `optional` **dinningOption**: `number`

Defined in: [types/order.ts:74](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L74)

Dining option

***

### historyNote?

> `optional` **historyNote**: `string`

Defined in: [types/order.ts:72](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L72)

History note

***

### id

> **id**: `number`

Defined in: [types/order.ts:46](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L46)

Order ID

***

### orderDelivery?

> `optional` **orderDelivery**: `object`

Defined in: [types/order.ts:87](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L87)

Delivery information

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

Defined in: [types/order.ts:76](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L76)

Order details (line items)

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

Defined in: [types/order.ts:50](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L50)

Purchase date

***

### retailerId

> **retailerId**: `number`

Defined in: [types/order.ts:52](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L52)

Retailer ID

***

### soldById?

> `optional` **soldById**: `number`

Defined in: [types/order.ts:56](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L56)

Sold by user ID

***

### status

> **status**: `number`

Defined in: [types/order.ts:62](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L62)

Order status

***

### statusValue

> **statusValue**: `string`

Defined in: [types/order.ts:64](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L64)

Order status value (text)

***

### total

> **total**: `number`

Defined in: [types/order.ts:66](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L66)

Total amount

***

### totalPayment

> **totalPayment**: `number`

Defined in: [types/order.ts:68](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L68)

Total payment amount

***

### totalQuantity

> **totalQuantity**: `number`

Defined in: [types/order.ts:70](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L70)

Total quantity
