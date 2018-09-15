
#  @cachemap/core

## Index

### Classes

* [Core](classes/core.md)

### Interfaces

* [BaseMetadata](interfaces/basemetadata.md)
* [BaseOptions](interfaces/baseoptions.md)
* [ConstructorOptions](interfaces/constructoroptions.md)
* [DehydratedMetadata](interfaces/dehydratedmetadata.md)
* [ExportOptions](interfaces/exportoptions.md)
* [ExportResult](interfaces/exportresult.md)
* [ImportOptions](interfaces/importoptions.md)
* [InitOptions](interfaces/initoptions.md)
* [Metadata](interfaces/metadata.md)
* [PlainObject](interfaces/plainobject.md)
* [Reaper](interfaces/reaper.md)
* [ReaperCallbacks](interfaces/reapercallbacks.md)
* [Store](interfaces/store.md)
* [StoreOptions](interfaces/storeoptions.md)

### Type aliases

* [CacheHeaders](#cacheheaders)
* [ReaperInit](#reaperinit)
* [StoreInit](#storeinit)

### Functions

* [rehydrateMetadata](#rehydratemetadata)

---

## Type aliases

<a id="cacheheaders"></a>

###  CacheHeaders

**Ƭ CacheHeaders**: * `Headers` &#124; `object`
*

*Defined in [defs/index.ts:62](https://github.com/dylanaubrey/cachemap/blob/58bca6e/packages/core/src/defs/index.ts#L62)*

___
<a id="reaperinit"></a>

###  ReaperInit

**Ƭ ReaperInit**: *`function`*

*Defined in [defs/index.ts:115](https://github.com/dylanaubrey/cachemap/blob/58bca6e/packages/core/src/defs/index.ts#L115)*

#### Type declaration
▸(callbacks: *[ReaperCallbacks](interfaces/reapercallbacks.md)*): [Reaper](interfaces/reaper.md)

**Parameters:**

| Param | Type |
| ------ | ------ |
| callbacks | [ReaperCallbacks](interfaces/reapercallbacks.md) |

**Returns:** [Reaper](interfaces/reaper.md)

___
<a id="storeinit"></a>

###  StoreInit

**Ƭ StoreInit**: *`function`*

*Defined in [defs/index.ts:135](https://github.com/dylanaubrey/cachemap/blob/58bca6e/packages/core/src/defs/index.ts#L135)*

#### Type declaration
▸(options: *[StoreOptions](interfaces/storeoptions.md)*): `Promise`<[Store](interfaces/store.md)>

**Parameters:**

| Param | Type |
| ------ | ------ |
| options | [StoreOptions](interfaces/storeoptions.md) |

**Returns:** `Promise`<[Store](interfaces/store.md)>

___

## Functions

<a id="rehydratemetadata"></a>

###  rehydrateMetadata

▸ **rehydrateMetadata**(metadata: *[DehydratedMetadata](interfaces/dehydratedmetadata.md)[]*): [Metadata](interfaces/metadata.md)[]

*Defined in [helpers/rehydrate-metadata/index.ts:4](https://github.com/dylanaubrey/cachemap/blob/58bca6e/packages/core/src/helpers/rehydrate-metadata/index.ts#L4)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| metadata | [DehydratedMetadata](interfaces/dehydratedmetadata.md)[] |

**Returns:** [Metadata](interfaces/metadata.md)[]

___
