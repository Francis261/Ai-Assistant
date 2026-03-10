# TOPK.INFO

Source: https://devdocs.io/redis/topk.info/index

```
TOPK.INFO
```

```
TOPK.INFO key
```

Returns number of required items (k), width, depth and decay values.

### Parameters

- key: Name of sketch.

## Return

Array reply with information of the filter.

## Examples

```
TOPK.INFO topk
1) k
2) (integer) 50
3) width
4) (integer) 2000
5) depth
6) (integer) 7
7) decay
8) "0.92500000000000004"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/topk.info/
