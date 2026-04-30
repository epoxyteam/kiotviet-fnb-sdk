[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / TableListParams

# Interface: TableListParams

Defined in: [types/table.ts:32](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/table.ts#L32)

Query parameters for listing tables

## Properties

### branchId?

> `optional` **branchId**: `number`

Defined in: [types/table.ts:34](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/table.ts#L34)

Filter by branch ID

***

### currentItem?

> `optional` **currentItem**: `number`

Defined in: [types/table.ts:42](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/table.ts#L42)

Current item to start from (default 0)

***

### includeRemoveIds?

> `optional` **includeRemoveIds**: `boolean`

Defined in: [types/table.ts:48](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/table.ts#L48)

Include removed IDs

***

### lastModifiedFrom?

> `optional` **lastModifiedFrom**: `string`

Defined in: [types/table.ts:38](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/table.ts#L38)

Filter by last modified date

***

### orderBy?

> `optional` **orderBy**: `string`

Defined in: [types/table.ts:44](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/table.ts#L44)

Field to order by

***

### orderDirection?

> `optional` **orderDirection**: `"Asc"` \| `"Desc"`

Defined in: [types/table.ts:46](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/table.ts#L46)

Order direction: 'Asc' (default) or 'Desc'

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [types/table.ts:40](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/table.ts#L40)

Number of items per page (default 20, max 100)

***

### zoneId?

> `optional` **zoneId**: `number`

Defined in: [types/table.ts:36](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/table.ts#L36)

Filter by zone ID
