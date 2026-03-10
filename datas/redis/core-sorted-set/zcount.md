# ZCOUNT

Source: https://devdocs.io/redis/zcount/index

```
ZCOUNT
```

```
ZCOUNT key min max
```

Returns the number of elements in the sorted set at key with a score between min and max.

The min and max arguments have the same semantic as described for ZRANGEBYSCORE.

Note: the command has a complexity of just O(log(N)) because it uses elements ranks (see ZRANK) to get an idea of the range. Because of this there is no need to do a work proportional to the size of the range.

## Return

Integer reply: the number of elements in the specified score range.

## Examples

```
ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZCOUNT myzset -inf +inf
ZCOUNT myzset (1 3
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zcount/
