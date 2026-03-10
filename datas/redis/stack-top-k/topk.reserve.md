# TOPK.RESERVE

Source: https://devdocs.io/redis/topk.reserve/index

```
TOPK.RESERVE
```

```
TOPK.RESERVE key topk [width depth decay]
```

Initializes a TopK with specified parameters.

### Parameters

- key: Key under which the sketch is to be found.
- topk: Number of top occurring items to keep.

Optional parameters

- width: Number of counters kept in each array. (Default 8)
- depth: Number of arrays. (Default 7)
- decay: The probability of reducing a counter in an occupied bucket. It is raised to power of it's counter (decay ^ bucket[i].counter). Therefore, as the counter gets higher, the chance of a reduction is being reduced. (Default 0.9)

## Return

Simple string reply - OK if executed correctly, or Error reply otherwise.

## Examples

```
redis> TOPK.RESERVE topk 50 2000 7 0.925
OK
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/topk.reserve/
