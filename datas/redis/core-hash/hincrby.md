# HINCRBY

Source: https://devdocs.io/redis/hincrby/index

```
HINCRBY
```

```
HINCRBY key field increment
```

Increments the number stored at field in the hash stored at key by increment. If key does not exist, a new key holding a hash is created. If field does not exist the value is set to 0 before the operation is performed.

The range of values supported by HINCRBY is limited to 64 bit signed integers.

## Return

Integer reply: the value at field after the increment operation.

## Examples

Since the increment argument is signed, both increment and decrement operations can be performed:

```
HSET myhash field 5
HINCRBY myhash field 1
HINCRBY myhash field -1
HINCRBY myhash field -10
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hincrby/
