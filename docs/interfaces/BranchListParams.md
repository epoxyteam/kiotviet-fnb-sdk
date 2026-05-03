[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / BranchListParams

# Interface: BranchListParams

Defined in: [types/branch.ts:28](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/branch.ts#L28)

Query parameters for listing branches

## Properties

### currentItem?

> `optional` **currentItem**: `number`

Defined in: [types/branch.ts:34](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/branch.ts#L34)

Current item to start from (default 0)

***

### lastModifiedFrom?

> `optional` **lastModifiedFrom**: `string`

Defined in: [types/branch.ts:30](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/branch.ts#L30)

Filter by last modified date

***

### orderBy?

> `optional` **orderBy**: `string`

Defined in: [types/branch.ts:36](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/branch.ts#L36)

Field to order by

***

### orderDirection?

> `optional` **orderDirection**: `"Asc"` \| `"Desc"`

Defined in: [types/branch.ts:38](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/branch.ts#L38)

Order direction: 'Asc' (default) or 'Desc'

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [types/branch.ts:32](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/branch.ts#L32)

Number of items per page (default 20, max 100)
