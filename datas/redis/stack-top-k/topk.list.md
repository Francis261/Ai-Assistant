# TOPK.LIST

Source: https://devdocs.io/redis/topk.list/index

```
TOPK.LIST
```

```
TOPK.LIST key [WITHCOUNT]
```

Return full list of items in Top K list.

### Parameters

- key: Name of sketch where item is counted.
- WITHCOUNT: Count of each element is returned.

## Return

k (or less) items in Top K list.

Array reply of Simple string reply - the names of items in the TopK list. If WITHCOUNT is requested, Array reply of Simple string reply and Integer reply pairs of the names of items in the TopK list and their count.

## Examples

```
TOPK.LIST topk
1) foo
2) 42
3) bar
```

```
TOPK.LIST topk WITHCOUNT
1) foo
2) (integer) 12
3) 42
4) (integer) 7
5) bar
6) (integer) 2
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/topk.list/
