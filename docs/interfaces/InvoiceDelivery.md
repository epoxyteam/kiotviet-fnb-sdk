[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / InvoiceDelivery

# Interface: InvoiceDelivery

Defined in: [types/invoice.ts:130](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L130)

Invoice delivery information

## Properties

### address

> **address**: `string`

Defined in: [types/invoice.ts:146](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L146)

Delivery address

***

### contactNumber

> **contactNumber**: `string`

Defined in: [types/invoice.ts:144](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L144)

Contact number

***

### deliveryCode

> **deliveryCode**: `string`

Defined in: [types/invoice.ts:132](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L132)

Delivery code

***

### height?

> `optional` **height**: `number`

Defined in: [types/invoice.ts:162](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L162)

Package height

***

### length?

> `optional` **length**: `number`

Defined in: [types/invoice.ts:158](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L158)

Package length

***

### locationId?

> `optional` **locationId**: `number`

Defined in: [types/invoice.ts:148](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L148)

Location ID

***

### locationName

> **locationName**: `string`

Defined in: [types/invoice.ts:150](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L150)

Location name

***

### partnerDelivery?

> `optional` **partnerDelivery**: [`PartnerDelivery`](PartnerDelivery.md)

Defined in: [types/invoice.ts:166](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L166)

Partner delivery information

***

### partnerDeliveryId?

> `optional` **partnerDeliveryId**: `number`

Defined in: [types/invoice.ts:164](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L164)

Partner delivery ID

***

### price?

> `optional` **price**: `number`

Defined in: [types/invoice.ts:140](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L140)

Delivery price

***

### priceCodPayment

> **priceCodPayment**: `number`

Defined in: [types/invoice.ts:154](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L154)

COD payment amount

***

### receiver

> **receiver**: `string`

Defined in: [types/invoice.ts:142](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L142)

Receiver name

***

### status

> **status**: `number`

Defined in: [types/invoice.ts:136](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L136)

Delivery status (1: not delivered, 2: delivering, 3: delivered, 4: returning, 5: returned, 6: cancelled)

***

### statusValue

> **statusValue**: `string`

Defined in: [types/invoice.ts:138](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L138)

Delivery status value (text)

***

### type?

> `optional` **type**: `number`

Defined in: [types/invoice.ts:134](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L134)

Delivery type

***

### usingPriceCod

> **usingPriceCod**: `boolean`

Defined in: [types/invoice.ts:152](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L152)

Using price COD (collect on delivery)

***

### weight?

> `optional` **weight**: `number`

Defined in: [types/invoice.ts:156](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L156)

Package weight

***

### width?

> `optional` **width**: `number`

Defined in: [types/invoice.ts:160](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L160)

Package width
