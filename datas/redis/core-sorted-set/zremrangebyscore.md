# ZREMRANGEBYSCORE

Source: https://devdocs.io/redis/zremrangebyscore/index

```
ZREMRANGEBYSCORE
```

```
ZREMRANGEBYSCORE key min max
```

Removes all elements in the sorted set stored at key with a score between min and max (inclusive).

## Return

Integer reply: the number of elements removed.

## Examples

```
ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZREMRANGEBYSCORE myzset -inf (2
ZRANGE myzset 0 -1 WITHSCORES
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zremrangebyscore/
