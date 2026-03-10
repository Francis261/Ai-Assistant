# ZREVRANGEBYLEX

Source: https://devdocs.io/redis/zrevrangebylex/index

```
ZREVRANGEBYLEX (deprecated)
```

As of Redis version 6.2.0, this command is regarded as deprecated.

It can be replaced by ZRANGE with the REV and BYLEX arguments when migrating or writing new code.

```
ZREVRANGEBYLEX key max min [LIMIT offset count]
```

When all the elements in a sorted set are inserted with the same score, in order to force lexicographical ordering, this command returns all the elements in the sorted set at key with a value between max and min.

Apart from the reversed ordering, ZREVRANGEBYLEX is similar to ZRANGEBYLEX.

## Return

Array reply: list of elements in the specified score range.

## Examples

```
ZADD myzset 0 a 0 b 0 c 0 d 0 e 0 f 0 g
ZREVRANGEBYLEX myzset [c -
ZREVRANGEBYLEX myzset (c -
ZREVRANGEBYLEX myzset (g [aaa
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zrevrangebylex/
