# TOUCH

Source: https://devdocs.io/redis/touch/index

```
TOUCH
```

```
TOUCH key [key ...]
```

Alters the last access time of a key(s). A key is ignored if it does not exist.

## Return

Integer reply: The number of keys that were touched.

## Examples

```
SET key1 "Hello"
SET key2 "World"
TOUCH key1 key2
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/touch/
