[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / CreateInvoiceRequest

# Interface: CreateInvoiceRequest

Defined in: [types/invoice.ts:310](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L310)

Request to create a new invoice

## Properties

### branchId

> **branchId**: `number`

Defined in: [types/invoice.ts:312](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L312)

Branch ID

***

### customerCode?

> `optional` **customerCode**: `string`

Defined in: [types/invoice.ts:316](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L316)

Customer code

***

### customerId?

> `optional` **customerId**: `number`

Defined in: [types/invoice.ts:314](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L314)

Customer ID

***

### description?

> `optional` **description**: `string`

Defined in: [types/invoice.ts:322](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L322)

Description/note

***

### invoiceDetails

> **invoiceDetails**: [`CreateInvoiceDetailRequest`](CreateInvoiceDetailRequest.md)[]

Defined in: [types/invoice.ts:318](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L318)

Invoice details (line items)

***

### orderSurcharges?

> `optional` **orderSurcharges**: `object`[]

Defined in: [types/invoice.ts:324](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L324)

Order surcharges

#### price?

> `optional` **price**: `number`

#### surchargeId

> **surchargeId**: `number`

#### surValue?

> `optional` **surValue**: `number`

***

### payments?

> `optional` **payments**: [`CreateInvoicePaymentRequest`](CreateInvoicePaymentRequest.md)[]

Defined in: [types/invoice.ts:320](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L320)

Payments
