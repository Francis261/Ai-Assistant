# INCRBY

Source: https://devdocs.io/redis/incrby/index

```
INCRBY
```

```
INCRBY key increment
```

Increments the number stored at key by increment. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers.

See INCR for extra information on increment/decrement operations.

## Return

Integer reply: the value of key after the increment

## Examples

```
SET mykey "10"
INCRBY mykey 5
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/incrby/
