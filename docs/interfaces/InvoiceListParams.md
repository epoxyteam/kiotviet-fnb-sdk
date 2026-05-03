[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / InvoiceListParams

# Interface: InvoiceListParams

Defined in: [types/invoice.ts:226](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L226)

Query parameters for listing invoices

## Properties

### branchIds?

> `optional` **branchIds**: `number`[]

Defined in: [types/invoice.ts:228](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L228)

Filter by branch IDs

***

### createdDate?

> `optional` **createdDate**: `string`

Defined in: [types/invoice.ts:254](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L254)

Filter by creation date

***

### currentItem?

> `optional` **currentItem**: `number`

Defined in: [types/invoice.ts:246](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L246)

Current item to start from (default 0)

***

### customerCode?

> `optional` **customerCode**: `string`

Defined in: [types/invoice.ts:232](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L232)

Filter by customer code

***

### customerIds?

> `optional` **customerIds**: `number`[]

Defined in: [types/invoice.ts:230](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L230)

Filter by customer IDs

***

### fromPurchaseDate?

> `optional` **fromPurchaseDate**: `string`

Defined in: [types/invoice.ts:256](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L256)

From purchase date

***

### includeInvoiceDelivery?

> `optional` **includeInvoiceDelivery**: `boolean`

Defined in: [types/invoice.ts:238](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L238)

Include invoice delivery information

***

### includePayment?

> `optional` **includePayment**: `boolean`

Defined in: [types/invoice.ts:236](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L236)

Include payment information

***

### lastModifiedFrom?

> `optional` **lastModifiedFrom**: `string`

Defined in: [types/invoice.ts:240](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L240)

Filter by last modified date

***

### orderBy?

> `optional` **orderBy**: `string`

Defined in: [types/invoice.ts:248](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L248)

Field to order by

***

### orderDirection?

> `optional` **orderDirection**: `"Asc"` \| `"Desc"`

Defined in: [types/invoice.ts:250](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L250)

Order direction: 'Asc' (default) or 'Desc'

***

### orderId?

> `optional` **orderId**: `number`

Defined in: [types/invoice.ts:252](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L252)

Filter by order ID

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [types/invoice.ts:244](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L244)

Number of items per page (default 20, max 100)

***

### SaleChannel?

> `optional` **SaleChannel**: `boolean`

Defined in: [types/invoice.ts:260](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L260)

Include sale channel information (pass 'SaleChannel=true' to include)

***

### status?

> `optional` **status**: `number`[]

Defined in: [types/invoice.ts:234](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L234)

Filter by invoice status

***

### toDate?

> `optional` **toDate**: `string`

Defined in: [types/invoice.ts:242](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L242)

Filter up to this date

***

### toPurchaseDate?

> `optional` **toPurchaseDate**: `string`

Defined in: [types/invoice.ts:258](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/invoice.ts#L258)

To purchase date
