# SDIFFSTORE

Source: https://devdocs.io/redis/sdiffstore/index

```
SDIFFSTORE
```

```
SDIFFSTORE destination key [key ...]
```

This command is equal to SDIFF, but instead of returning the resulting set, it is stored in destination.

If destination already exists, it is overwritten.

## Return

Integer reply: the number of elements in the resulting set.

## Examples

```
SADD key1 "a"
SADD key1 "b"
SADD key1 "c"
SADD key2 "c"
SADD key2 "d"
SADD key2 "e"
SDIFFSTORE key key1 key2
SMEMBERS key
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/sdiffstore/
