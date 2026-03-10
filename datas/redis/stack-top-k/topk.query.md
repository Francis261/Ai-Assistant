# TOPK.QUERY

Source: https://devdocs.io/redis/topk.query/index

```
TOPK.QUERY
```

```
TOPK.QUERY key item [item ...]
```

Checks whether an item is one of Top-K items. Multiple items can be checked at once.

### Parameters

- key: Name of sketch where item is queried.
- item: Item/s to be queried.

## Return

Array reply of Integer reply - "1" if item is in Top-K, otherwise "0".

## Examples

```
redis> TOPK.QUERY topk 42 nonexist
1) (integer) 1
2) (integer) 0
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/topk.query/
