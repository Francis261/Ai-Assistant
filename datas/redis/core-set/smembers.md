# SMEMBERS

Source: https://devdocs.io/redis/smembers/index

```
SMEMBERS
```

```
SMEMBERS key
```

Returns all the members of the set value stored at key.

This has the same effect as running SINTER with one argument key.

## Return

Array reply: all elements of the set.

## Examples

```
SADD myset "Hello"
SADD myset "World"
SMEMBERS myset
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/smembers/
