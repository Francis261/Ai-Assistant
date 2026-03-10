# HGET

Source: https://devdocs.io/redis/hget/index

```
HGET
```

```
HGET key field
```

Returns the value associated with field in the hash stored at key.

## Return

Bulk string reply: the value associated with field, or nil when field is not present in the hash or key does not exist.

## Examples

```
HSET myhash field1 "foo"
HGET myhash field1
HGET myhash field2
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hget/
