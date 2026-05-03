[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / TokenStorage

# Interface: TokenStorage

Defined in: [auth/types.ts:23](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/auth/types.ts#L23)

## Methods

### getToken()

> **getToken**(): `Promise`\<`null` \| [`StoredToken`](StoredToken.md)\>

Defined in: [auth/types.ts:25](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/auth/types.ts#L25)

#### Returns

`Promise`\<`null` \| [`StoredToken`](StoredToken.md)\>

***

### removeToken()

> **removeToken**(): `Promise`\<`void`\>

Defined in: [auth/types.ts:26](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/auth/types.ts#L26)

#### Returns

`Promise`\<`void`\>

***

### saveToken()

> **saveToken**(`token`): `Promise`\<`void`\>

Defined in: [auth/types.ts:24](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/auth/types.ts#L24)

#### Parameters

##### token

[`StoredToken`](StoredToken.md)

#### Returns

`Promise`\<`void`\>
