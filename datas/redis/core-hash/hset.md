# HSET

Source: https://devdocs.io/redis/hset/index

```
HSET
```

```
HSET key field value [field value ...]
```

Sets the specified fields to their respective values in the hash stored at key.

This command overwrites the values of specified fields that exist in the hash. If key doesn't exist, a new key holding a hash is created.

## Return

Integer reply: The number of fields that were added.

## Examples

```
HSET myhash field1 "Hello"
HGET myhash field1
HSET myhash field2 "Hi" field3 "World"
HGET myhash field2
HGET myhash field3
HGETALL myhash
```

## History

- Starting with Redis version 4.0.0: Accepts multiple field and value arguments.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hset/
