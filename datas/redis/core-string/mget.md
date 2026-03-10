# MGET

Source: https://devdocs.io/redis/mget/index

```
MGET
```

```
MGET key [key ...]
```

Returns the values of all specified keys. For every key that does not hold a string value or does not exist, the special value nil is returned. Because of this, the operation never fails.

## Return

Array reply: list of values at the specified keys.

## Examples

```
SET key1 "Hello"
SET key2 "World"
MGET key1 key2 nonexisting
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/mget/
