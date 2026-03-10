# BF.EXISTS

Source: https://devdocs.io/redis/bf.exists/index

```
BF.EXISTS
```

```
BF.EXISTS key item
```

Determines whether an item may exist in the Bloom Filter or not.

### Parameters

- key: The name of the filter
- item: The item to check for

## Return

Integer reply - where "1" value means the item may exist in the filter, and a "0" value means it does not exist in the filter.

## Examples

```
redis> BF.EXISTS bf item1
(integer) 1
redis> BF.EXISTS bf item_new
(integer) 0
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/bf.exists/
