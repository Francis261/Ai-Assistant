# BF.INFO

Source: https://devdocs.io/redis/bf.info/index

```
BF.INFO
```

```
BF.INFO key [CAPACITY | SIZE | FILTERS | ITEMS | EXPANSION]
```

Return information about a Bloom filter.

### Parameters

- key: key name for an existing Bloom filter.

Optional parameters:

- CAPACITY Number of unique items that can be stored in this Bloom filter before scaling would be required (including already added items)
- SIZE Memory size: number of bytes allocated for this Bloom filter
- FILTERS Number of sub-filters
- ITEMS Number of items that were added to this Bloom filter and detected as unique (items that caused at least one bit to be set in at least one sub-filter)
- EXPANSION Expansion rate

When no optional parameter is specified: return all information fields.

## Return

Array reply with information about the Bloom filter.

Error when key does not exist.

Error when key is of a type other than Bloom filter.

## Examples

```
redis>BF.ADDbf1observation1(integer)1redis>BF.INFObf11)Capacity2)(integer)1003)Size4)(integer)2405)Numberoffilters6)(integer)17)Numberofitemsinserted8)(integer)19)Expansionrate10)(integer)2redis>BF.INFObf1CAPACITY1)(integer)100
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/bf.info/
