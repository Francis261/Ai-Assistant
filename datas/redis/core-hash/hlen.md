# HLEN

Source: https://devdocs.io/redis/hlen/index

```
HLEN
```

```
HLEN key
```

Returns the number of fields contained in the hash stored at key.

## Return

Integer reply: number of fields in the hash, or 0 when key does not exist.

## Examples

```
HSET myhash field1 "Hello"
HSET myhash field2 "World"
HLEN myhash
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hlen/
