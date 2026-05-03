[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / InvoiceDetail

# Interface: InvoiceDetail

Defined in: [types/invoice.ts:66](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L66)

Invoice detail (line item)

## Properties

### discount?

> `optional` **discount**: `number`

Defined in: [types/invoice.ts:80](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L80)

Discount amount

***

### discountRatio?

> `optional` **discountRatio**: `number`

Defined in: [types/invoice.ts:78](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L78)

Discount ratio (percentage)

***

### note

> **note**: `string`

Defined in: [types/invoice.ts:82](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L82)

Note for the product

***

### price

> **price**: `number`

Defined in: [types/invoice.ts:76](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L76)

Price

***

### productBatchExpire?

> `optional` **productBatchExpire**: [`ProductBatchExpire`](ProductBatchExpire.md)

Defined in: [types/invoice.ts:86](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L86)

Product batch expire information

***

### productCode

> **productCode**: `string`

Defined in: [types/invoice.ts:70](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L70)

Product code

***

### productId

> **productId**: `number`

Defined in: [types/invoice.ts:68](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L68)

Product ID

***

### productName

> **productName**: `string`

Defined in: [types/invoice.ts:72](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L72)

Product name (including attributes and unit)

***

### quantity

> **quantity**: `number`

Defined in: [types/invoice.ts:74](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L74)

Quantity

***

### serialNumbers

> **serialNumbers**: `string`

Defined in: [types/invoice.ts:84](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L84)

Serial numbers (IMEI list)
