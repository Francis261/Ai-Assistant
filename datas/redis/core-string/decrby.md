# DECRBY

Source: https://devdocs.io/redis/decrby/index

```
DECRBY
```

```
DECRBY key decrement
```

Decrements the number stored at key by decrement. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers.

See INCR for extra information on increment/decrement operations.

## Return

Integer reply: the value of key after the decrement

## Examples

```
SET mykey "10"
DECRBY mykey 3
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/decrby/
