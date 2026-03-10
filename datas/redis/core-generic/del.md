# DEL

Source: https://devdocs.io/redis/del/index

```
DEL
```

```
DEL key [key ...]
```

Removes the specified keys. A key is ignored if it does not exist.

## Return

Integer reply: The number of keys that were removed.

## Examples

```
SET key1 "Hello"
SET key2 "World"
DEL key1 key2 key3
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/del/
