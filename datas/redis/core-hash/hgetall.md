# HGETALL

Source: https://devdocs.io/redis/hgetall/index

```
HGETALL
```

```
HGETALL key
```

Returns all fields and values of the hash stored at key. In the returned value, every field name is followed by its value, so the length of the reply is twice the size of the hash.

## Return

Array reply: list of fields and their values stored in the hash, or an empty list when key does not exist.

## Examples

```
HSET myhash field1 "Hello"
HSET myhash field2 "World"
HGETALL myhash
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hgetall/
