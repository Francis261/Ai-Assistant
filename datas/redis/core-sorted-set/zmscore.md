# ZMSCORE

Source: https://devdocs.io/redis/zmscore/index

```
ZMSCORE
```

```
ZMSCORE key member [member ...]
```

Returns the scores associated with the specified members in the sorted set stored at key.

For every member that does not exist in the sorted set, a nil value is returned.

## Return

Array reply: list of scores or nil associated with the specified member values (a double precision floating point number), represented as strings.

## Examples

```
ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZMSCORE myzset "one" "two" "nofield"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zmscore/
