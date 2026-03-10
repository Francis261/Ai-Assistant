# ZSCORE

Source: https://devdocs.io/redis/zscore/index

```
ZSCORE
```

```
ZSCORE key member
```

Returns the score of member in the sorted set at key.

If member does not exist in the sorted set, or key does not exist, nil is returned.

## Return

Bulk string reply: the score of member (a double precision floating point number), represented as string.

## Examples

```
ZADD myzset 1 "one"
ZSCORE myzset "one"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zscore/
