# ZREVRANGEBYSCORE

Source: https://devdocs.io/redis/zrevrangebyscore/index

```
ZREVRANGEBYSCORE (deprecated)
```

As of Redis version 6.2.0, this command is regarded as deprecated.

It can be replaced by ZRANGE with the REV and BYSCORE arguments when migrating or writing new code.

```
ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count]
```

Returns all the elements in the sorted set at key with a score between max and min (including elements with score equal to max or min). In contrary to the default ordering of sorted sets, for this command the elements are considered to be ordered from high to low scores.

The elements having the same score are returned in reverse lexicographical order.

Apart from the reversed ordering, ZREVRANGEBYSCORE is similar to ZRANGEBYSCORE.

## Return

Array reply: list of elements in the specified score range (optionally with their scores).

## Examples

```
ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZREVRANGEBYSCORE myzset +inf -inf
ZREVRANGEBYSCORE myzset 2 1
ZREVRANGEBYSCORE myzset 2 (1
ZREVRANGEBYSCORE myzset (2 (1
```

## History

- Starting with Redis version 2.1.6: min and max can be exclusive.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zrevrangebyscore/
