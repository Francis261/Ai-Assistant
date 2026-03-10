# ZCARD

Source: https://devdocs.io/redis/zcard/index

```
ZCARD
```

```
ZCARD key
```

Returns the sorted set cardinality (number of elements) of the sorted set stored at key.

## Return

Integer reply: the cardinality (number of elements) of the sorted set, or 0 if key does not exist.

## Examples

```
ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZCARD myzset
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zcard/
