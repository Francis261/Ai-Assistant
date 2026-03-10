# TOPK.COUNT

Source: https://devdocs.io/redis/topk.count/index

```
TOPK.COUNT (deprecated)
```

As of Redis version 2.4, this command is regarded as deprecated.

```
TOPK.COUNT key item [item ...]
```

Returns count for an item. Multiple items can be requested at once. Please note this number will never be higher than the real count and likely to be lower.

This command has been deprecated. The count value is not a representative of the number of appearances of an item.

### Parameters

- key: Name of sketch where item is counted.
- item: Item/s to be counted.

## Return

Array reply of Integer reply - count for responding item.

## Examples

```
redis> TOPK.COUNT topk foo 42 nonexist
1) (integer) 3
2) (integer) 1
3) (integer) 0
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/topk.count/
