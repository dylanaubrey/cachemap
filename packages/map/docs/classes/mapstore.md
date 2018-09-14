[@cachemap/map](../README.md) > [MapStore](../classes/mapstore.md)

# Class: MapStore

## Hierarchy

**MapStore**

## Implements

* `Store`

## Index

### Constructors

* [constructor](mapstore.md#constructor)

### Properties

* [type](mapstore.md#type)

### Accessors

* [maxHeapSize](mapstore.md#maxheapsize)
* [name](mapstore.md#name)

### Methods

* [clear](mapstore.md#clear)
* [delete](mapstore.md#delete)
* [entries](mapstore.md#entries)
* [get](mapstore.md#get)
* [has](mapstore.md#has)
* [import](mapstore.md#import)
* [set](mapstore.md#set)
* [size](mapstore.md#size)
* [init](mapstore.md#init)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MapStore**(options: *[ConstructorOptions](../#constructoroptions)*): [MapStore](mapstore.md)

*Defined in [main/index.ts:13](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L13)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| options | [ConstructorOptions](../#constructoroptions) |

**Returns:** [MapStore](mapstore.md)

___

## Properties

<a id="type"></a>

###  type

**● type**: *"map"* = "map"

*Defined in [main/index.ts:10](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L10)*

___

## Accessors

<a id="maxheapsize"></a>

###  maxHeapSize

getmaxHeapSize(): `number`

*Defined in [main/index.ts:23](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L23)*

**Returns:** `number`

___
<a id="name"></a>

###  name

getname(): `string`

*Defined in [main/index.ts:27](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L27)*

**Returns:** `string`

___

## Methods

<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`void`>

*Defined in [main/index.ts:31](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L31)*

**Returns:** `Promise`<`void`>

___
<a id="delete"></a>

###  delete

▸ **delete**(key: *`string`*): `Promise`<`boolean`>

*Defined in [main/index.ts:35](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="entries"></a>

###  entries

▸ **entries**(keys?: *`string`[]*): `Promise`<`Array`<[`string`, `any`]>>

*Defined in [main/index.ts:39](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` keys | `string`[] |

**Returns:** `Promise`<`Array`<[`string`, `any`]>>

___
<a id="get"></a>

###  get

▸ **get**(key: *`string`*): `Promise`<`any`>

*Defined in [main/index.ts:52](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `Promise`<`any`>

___
<a id="has"></a>

###  has

▸ **has**(key: *`string`*): `Promise`<`boolean`>

*Defined in [main/index.ts:56](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L56)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="import"></a>

###  import

▸ **import**(entries: *`Array`<[`string`, `any`]>*): `Promise`<`void`>

*Defined in [main/index.ts:60](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entries | `Array`<[`string`, `any`]> |

**Returns:** `Promise`<`void`>

___
<a id="set"></a>

###  set

▸ **set**(key: *`string`*, value: *`any`*): `Promise`<`void`>

*Defined in [main/index.ts:64](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L64)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |
| value | `any` |

**Returns:** `Promise`<`void`>

___
<a id="size"></a>

###  size

▸ **size**(): `Promise`<`number`>

*Defined in [main/index.ts:68](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L68)*

**Returns:** `Promise`<`number`>

___
<a id="init"></a>

### `<Static>` init

▸ **init**(options: *[InitOptions](../interfaces/initoptions.md)*): `Promise`<[MapStore](mapstore.md)>

*Defined in [main/index.ts:6](https://github.com/dylanaubrey/cachemap/blob/2a8e078/packages/map/src/main/index.ts#L6)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| options | [InitOptions](../interfaces/initoptions.md) |

**Returns:** `Promise`<[MapStore](mapstore.md)>

___
