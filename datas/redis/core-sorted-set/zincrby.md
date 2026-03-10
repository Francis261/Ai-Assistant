# ZINCRBY

Source: https://devdocs.io/redis/zincrby/index

```
ZINCRBY
```

```
ZINCRBY key increment member
```

Increments the score of member in the sorted set stored at key by increment. If member does not exist in the sorted set, it is added with increment as its score (as if its previous score was 0.0). If key does not exist, a new sorted set with the specified member as its sole member is created.

An error is returned when key exists but does not hold a sorted set.

The score value should be the string representation of a numeric value, and accepts double precision floating point numbers. It is possible to provide a negative value to decrement the score.

## Return

Bulk string reply: the new score of member (a double precision floating point number), represented as string.

## Examples

```
ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZINCRBY myzset 2 "one"
ZRANGE myzset 0 -1 WITHSCORES
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zincrby/
