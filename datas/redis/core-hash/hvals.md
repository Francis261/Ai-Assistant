# HVALS

Source: https://devdocs.io/redis/hvals/index

```
HVALS
```

```
HVALS key
```

Returns all values in the hash stored at key.

## Return

Array reply: list of values in the hash, or an empty list when key does not exist.

## Examples

```
HSET myhash field1 "Hello"
HSET myhash field2 "World"
HVALS myhash
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hvals/
