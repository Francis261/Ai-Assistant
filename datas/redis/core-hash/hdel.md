# HDEL

Source: https://devdocs.io/redis/hdel/index

```
HDEL
```

```
HDEL key field [field ...]
```

Removes the specified fields from the hash stored at key. Specified fields that do not exist within this hash are ignored. If key does not exist, it is treated as an empty hash and this command returns 0.

## Return

Integer reply: the number of fields that were removed from the hash, not including specified but non existing fields.

## Examples

```
HSET myhash field1 "foo"
HDEL myhash field1
HDEL myhash field2
```

## History

- Starting with Redis version 2.4.0: Accepts multiple field arguments.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hdel/
