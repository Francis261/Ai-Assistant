# ZRANGESTORE

Source: https://devdocs.io/redis/zrangestore/index

```
ZRANGESTORE
```

```
ZRANGESTORE dst src min max [BYSCORE | BYLEX] [REV] [LIMIT offset
  count]
```

This command is like ZRANGE, but stores the result in the <dst> destination key.

## Return

Integer reply: the number of elements in the resulting sorted set.

## Examples

```
ZADD srczset 1 "one" 2 "two" 3 "three" 4 "four"
ZRANGESTORE dstzset srczset 2 -1
ZRANGE dstzset 0 -1
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zrangestore/
