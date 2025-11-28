[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / Invoice

# Interface: Invoice

Defined in: [types/invoice.ts:172](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L172)

Invoice entity

## Properties

### branchId

> **branchId**: `number`

Defined in: [types/invoice.ts:182](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L182)

Branch ID

***

### branchName

> **branchName**: `string`

Defined in: [types/invoice.ts:184](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L184)

Branch name

***

### code

> **code**: `string`

Defined in: [types/invoice.ts:176](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L176)

Invoice code

***

### createdDate

> **createdDate**: `string`

Defined in: [types/invoice.ts:208](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L208)

Creation date

***

### customerCode

> **customerCode**: `string`

Defined in: [types/invoice.ts:192](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L192)

Customer code

***

### customerId?

> `optional` **customerId**: `number`

Defined in: [types/invoice.ts:190](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L190)

Customer ID

***

### customerName

> **customerName**: `string`

Defined in: [types/invoice.ts:194](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L194)

Customer name

***

### description?

> `optional` **description**: `string`

Defined in: [types/invoice.ts:204](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L204)

Description/note

***

### id

> **id**: `number`

Defined in: [types/invoice.ts:174](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L174)

Invoice ID

***

### invoiceDelivery?

> `optional` **invoiceDelivery**: [`InvoiceDelivery`](InvoiceDelivery.md)

Defined in: [types/invoice.ts:220](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L220)

Invoice delivery information

***

### invoiceDetails?

> `optional` **invoiceDetails**: [`InvoiceDetail`](InvoiceDetail.md)[]

Defined in: [types/invoice.ts:216](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L216)

Invoice details (line items)

***

### invoiceOrderSurcharges?

> `optional` **invoiceOrderSurcharges**: [`InvoiceOrderSurcharge`](InvoiceOrderSurcharge.md)[]

Defined in: [types/invoice.ts:214](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L214)

Invoice order surcharges

***

### modifiedDate

> **modifiedDate**: `string`

Defined in: [types/invoice.ts:210](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L210)

Modification date

***

### orderCode?

> `optional` **orderCode**: `string`

Defined in: [types/invoice.ts:178](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L178)

Order code

***

### payments?

> `optional` **payments**: [`InvoicePayment`](InvoicePayment.md)[]

Defined in: [types/invoice.ts:212](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L212)

Payment details

***

### purchaseDate

> **purchaseDate**: `string`

Defined in: [types/invoice.ts:180](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L180)

Purchase date

***

### SaleChannel?

> `optional` **SaleChannel**: [`SaleChannel`](SaleChannel.md)

Defined in: [types/invoice.ts:218](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L218)

Sale channel information

***

### soldById?

> `optional` **soldById**: `number`

Defined in: [types/invoice.ts:186](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L186)

Sold by user ID

***

### soldByName

> **soldByName**: `string`

Defined in: [types/invoice.ts:188](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L188)

Sold by user name

***

### status

> **status**: `number`

Defined in: [types/invoice.ts:200](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L200)

Invoice status

***

### statusValue

> **statusValue**: `string`

Defined in: [types/invoice.ts:202](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L202)

Invoice status value (text)

***

### total

> **total**: `number`

Defined in: [types/invoice.ts:196](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L196)

Total amount customer needs to pay

***

### totalPayment

> **totalPayment**: `number`

Defined in: [types/invoice.ts:198](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L198)

Total amount customer has paid

***

### usingCod

> **usingCod**: `boolean`

Defined in: [types/invoice.ts:206](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/types/invoice.ts#L206)

Using COD
