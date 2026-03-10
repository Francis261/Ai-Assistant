# ZREVRANGE

Source: https://devdocs.io/redis/zrevrange/index

```
ZREVRANGE (deprecated)
```

As of Redis version 6.2.0, this command is regarded as deprecated.

It can be replaced by ZRANGE with the REV argument when migrating or writing new code.

```
ZREVRANGE key start stop [WITHSCORES]
```

Returns the specified range of elements in the sorted set stored at key. The elements are considered to be ordered from the highest to the lowest score. Descending lexicographical order is used for elements with equal score.

Apart from the reversed ordering, ZREVRANGE is similar to ZRANGE.

## Return

Array reply: list of elements in the specified range (optionally with their scores).

## Examples

```
ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZREVRANGE myzset 0 -1
ZREVRANGE myzset 2 3
ZREVRANGE myzset -2 -1
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zrevrange/
