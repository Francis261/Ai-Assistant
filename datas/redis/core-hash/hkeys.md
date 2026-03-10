# HKEYS

Source: https://devdocs.io/redis/hkeys/index

```
HKEYS
```

```
HKEYS key
```

Returns all field names in the hash stored at key.

## Return

Array reply: list of fields in the hash, or an empty list when key does not exist.

## Examples

```
HSET myhash field1 "Hello"
HSET myhash field2 "World"
HKEYS myhash
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hkeys/
