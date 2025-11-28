[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / TokenStorage

# Interface: TokenStorage

Defined in: [auth/types.ts:23](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/auth/types.ts#L23)

## Methods

### getToken()

> **getToken**(): `Promise`\<`null` \| [`StoredToken`](StoredToken.md)\>

Defined in: [auth/types.ts:25](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/auth/types.ts#L25)

#### Returns

`Promise`\<`null` \| [`StoredToken`](StoredToken.md)\>

***

### removeToken()

> **removeToken**(): `Promise`\<`void`\>

Defined in: [auth/types.ts:26](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/auth/types.ts#L26)

#### Returns

`Promise`\<`void`\>

***

### saveToken()

> **saveToken**(`token`): `Promise`\<`void`\>

Defined in: [auth/types.ts:24](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/676f2b78f45e8d9692112eb5adfe51e7b2ec8456/src/auth/types.ts#L24)

#### Parameters

##### token

[`StoredToken`](StoredToken.md)

#### Returns

`Promise`\<`void`\>
