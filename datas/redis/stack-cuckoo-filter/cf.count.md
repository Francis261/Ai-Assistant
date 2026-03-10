# CF.COUNT

Source: https://devdocs.io/redis/cf.count/index

```
CF.COUNT
```

```
CF.COUNT key item
```

Returns the number of times an item may be in the filter. Because this is a probabilistic data structure, this may not necessarily be accurate.

If you just want to know if an item exists in the filter, use CF.EXISTS because it is more efficient for that purpose.

### Parameters

- key: The name of the filter
- item: The item to count

## Return

Integer reply - with the count of possible matching copies of the item in the filter.

## Examples

```
redis> CF.COUNT cf item1
(integer) 42
```

```
redis> CF.COUNT cf item_new
(integer) 0
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cf.count/
