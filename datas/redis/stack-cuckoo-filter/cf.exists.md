# CF.EXISTS

Source: https://devdocs.io/redis/cf.exists/index

```
CF.EXISTS
```

```
CF.EXISTS key item
```

Check if an item exists in a Cuckoo Filter key

### Parameters

- key: The name of the filter
- item: The item to check for

## Return

Integer reply - where "1" value means the item may exist in the filter, and a "0" value means it does not exist in the filter.

## Examples

```
redis> CF.EXISTS cf item1
(integer) 1
```

```
redis> CF.EXISTS cf item_new
(integer) 0
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cf.exists/
