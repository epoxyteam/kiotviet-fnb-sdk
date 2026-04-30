[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / OrderListParams

# Interface: OrderListParams

Defined in: [types/order.ts:106](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L106)

Query parameters for listing orders

## Properties

### branchIds?

> `optional` **branchIds**: `number`[]

Defined in: [types/order.ts:108](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L108)

Filter by branch IDs

***

### currentItem?

> `optional` **currentItem**: `number`

Defined in: [types/order.ts:122](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L122)

Current item to start from (default 0)

***

### customerIds?

> `optional` **customerIds**: `number`[]

Defined in: [types/order.ts:110](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L110)

Filter by customer IDs

***

### fromPurchaseDate?

> `optional` **fromPurchaseDate**: `string`

Defined in: [types/order.ts:116](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L116)

From purchase date

***

### includeRemoveIds?

> `optional` **includeRemoveIds**: `boolean`

Defined in: [types/order.ts:128](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L128)

Include removed IDs

***

### lastModifiedFrom?

> `optional` **lastModifiedFrom**: `string`

Defined in: [types/order.ts:114](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L114)

Filter by last modified date

***

### orderBy?

> `optional` **orderBy**: `string`

Defined in: [types/order.ts:124](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L124)

Field to order by

***

### orderDirection?

> `optional` **orderDirection**: `"Asc"` \| `"Desc"`

Defined in: [types/order.ts:126](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L126)

Order direction: 'Asc' (default) or 'Desc'

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [types/order.ts:120](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L120)

Number of items per page (default 20, max 100)

***

### status?

> `optional` **status**: `number`[]

Defined in: [types/order.ts:112](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L112)

Filter by order status

***

### toPurchaseDate?

> `optional` **toPurchaseDate**: `string`

Defined in: [types/order.ts:118](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/order.ts#L118)

To purchase date
