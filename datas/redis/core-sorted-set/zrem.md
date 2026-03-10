# ZREM

Source: https://devdocs.io/redis/zrem/index

```
ZREM
```

```
ZREM key member [member ...]
```

Removes the specified members from the sorted set stored at key. Non existing members are ignored.

An error is returned when key exists and does not hold a sorted set.

## Return

Integer reply, specifically:

- The number of members removed from the sorted set, not including non existing members.

## Examples

```
ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZREM myzset "two"
ZRANGE myzset 0 -1 WITHSCORES
```

## History

- Starting with Redis version 2.4.0: Accepts multiple elements.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zrem/
