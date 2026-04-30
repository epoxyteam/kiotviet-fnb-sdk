[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / UserListParams

# Interface: UserListParams

Defined in: [types/user.ts:34](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/user.ts#L34)

Query parameters for listing users

## Properties

### currentItem?

> `optional` **currentItem**: `number`

Defined in: [types/user.ts:40](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/user.ts#L40)

Current item to start from (default 0)

***

### includeRemoveIds?

> `optional` **includeRemoveIds**: `boolean`

Defined in: [types/user.ts:46](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/user.ts#L46)

Include removed IDs

***

### lastModifiedFrom?

> `optional` **lastModifiedFrom**: `string`

Defined in: [types/user.ts:36](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/user.ts#L36)

Filter by last modified date

***

### orderBy?

> `optional` **orderBy**: `string`

Defined in: [types/user.ts:42](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/user.ts#L42)

Field to order by

***

### orderDirection?

> `optional` **orderDirection**: `"Asc"` \| `"Desc"`

Defined in: [types/user.ts:44](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/user.ts#L44)

Order direction: 'Asc' (default) or 'Desc'

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [types/user.ts:38](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/user.ts#L38)

Number of items per page (default 20, max 100)
