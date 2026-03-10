# GETBIT

Source: https://devdocs.io/redis/getbit/index

```
GETBIT
```

```
GETBIT key offset
```

Returns the bit value at offset in the string value stored at key.

When offset is beyond the string length, the string is assumed to be a contiguous space with 0 bits. When key does not exist it is assumed to be an empty string, so offset is always out of range and the value is also assumed to be a contiguous space with 0 bits.

## Return

Integer reply: the bit value stored at offset.

## Examples

```
SETBIT mykey 7 1
GETBIT mykey 0
GETBIT mykey 7
GETBIT mykey 100
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/getbit/
