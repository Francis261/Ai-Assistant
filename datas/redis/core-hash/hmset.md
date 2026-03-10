# HMSET

Source: https://devdocs.io/redis/hmset/index

```
HMSET (deprecated)
```

As of Redis version 4.0.0, this command is regarded as deprecated.

It can be replaced by HSET with multiple field-value pairs when migrating or writing new code.

```
HMSET key field value [field value ...]
```

Sets the specified fields to their respective values in the hash stored at key. This command overwrites any specified fields already existing in the hash. If key does not exist, a new key holding a hash is created.

## Return

Simple string reply

## Examples

```
HMSET myhash field1 "Hello" field2 "World"
HGET myhash field1
HGET myhash field2
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hmset/
