[**KiotViet FNB SDK v1.1.0**](../README.md)

***

[KiotViet FNB SDK](../README.md) / KitchenTicket

# Interface: KitchenTicket

Defined in: [types/kitchen.ts:20](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L20)

Kitchen ticket entity (FnB-specific)

## Properties

### branchId

> **branchId**: `number`

Defined in: [types/kitchen.ts:30](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L30)

Branch ID

***

### branchName?

> `optional` **branchName**: `string`

Defined in: [types/kitchen.ts:32](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L32)

Branch name

***

### code

> **code**: `string`

Defined in: [types/kitchen.ts:24](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L24)

Ticket code

***

### createdDate?

> `optional` **createdDate**: `string`

Defined in: [types/kitchen.ts:46](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L46)

Creation date

***

### id

> **id**: `number`

Defined in: [types/kitchen.ts:22](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L22)

Ticket ID

***

### modifiedDate?

> `optional` **modifiedDate**: `string`

Defined in: [types/kitchen.ts:48](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L48)

Last modification date

***

### orderCode?

> `optional` **orderCode**: `string`

Defined in: [types/kitchen.ts:28](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L28)

Order code

***

### orderId?

> `optional` **orderId**: `number`

Defined in: [types/kitchen.ts:26](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L26)

Order ID

***

### retailerId

> **retailerId**: `number`

Defined in: [types/kitchen.ts:42](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L42)

Retailer ID

***

### status

> **status**: `number`

Defined in: [types/kitchen.ts:38](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L38)

Ticket status (1: pending, 2: preparing, 3: done, 4: cancelled)

***

### statusValue?

> `optional` **statusValue**: `string`

Defined in: [types/kitchen.ts:40](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L40)

Ticket status value (text)

***

### tableId?

> `optional` **tableId**: `number`

Defined in: [types/kitchen.ts:34](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L34)

Table ID

***

### tableName?

> `optional` **tableName**: `string`

Defined in: [types/kitchen.ts:36](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L36)

Table name

***

### ticketDetails?

> `optional` **ticketDetails**: [`KitchenTicketDetail`](KitchenTicketDetail.md)[]

Defined in: [types/kitchen.ts:44](https://github.com/epoxyteam/kiotviet-fnb-sdk/blob/a1293966c8b57a40c13f5eb490a83c745c2d3af1/src/types/kitchen.ts#L44)

Ticket details
