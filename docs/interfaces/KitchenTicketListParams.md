[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / KitchenTicketListParams

# Interface: KitchenTicketListParams

Defined in: [types/kitchen.ts:54](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L54)

Query parameters for listing kitchen tickets

## Properties

### branchId?

> `optional` **branchId**: `number`

Defined in: [types/kitchen.ts:56](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L56)

Filter by branch ID

***

### currentItem?

> `optional` **currentItem**: `number`

Defined in: [types/kitchen.ts:64](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L64)

Current item to start from (default 0)

***

### lastModifiedFrom?

> `optional` **lastModifiedFrom**: `string`

Defined in: [types/kitchen.ts:60](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L60)

Filter by last modified date

***

### orderBy?

> `optional` **orderBy**: `string`

Defined in: [types/kitchen.ts:66](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L66)

Field to order by

***

### orderDirection?

> `optional` **orderDirection**: `"Asc"` \| `"Desc"`

Defined in: [types/kitchen.ts:68](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L68)

Order direction: 'Asc' (default) or 'Desc'

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [types/kitchen.ts:62](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L62)

Number of items per page (default 20, max 100)

***

### status?

> `optional` **status**: `number`[]

Defined in: [types/kitchen.ts:58](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L58)

Filter by status
