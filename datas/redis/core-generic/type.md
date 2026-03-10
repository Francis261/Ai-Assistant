# TYPE

Source: https://devdocs.io/redis/type/index

```
TYPE
```

```
TYPE key
```

Returns the string representation of the type of the value stored at key. The different types that can be returned are: string, list, set, zset, hash and stream.

## Return

Simple string reply: type of key, or none when key does not exist.

## Examples

```
SET key1 "value"
LPUSH key2 "value"
SADD key3 "value"
TYPE key1
TYPE key2
TYPE key3
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/type/
