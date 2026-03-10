# EXISTS

Source: https://devdocs.io/redis/exists/index

```
EXISTS
```

```
EXISTS key [key ...]
```

Returns if key exists.

The user should be aware that if the same existing key is mentioned in the arguments multiple times, it will be counted multiple times. So if somekey exists, EXISTS somekey somekey will return 2.

## Return

Integer reply, specifically the number of keys that exist from those specified as arguments.

## Examples

```
SET key1 "Hello"
EXISTS key1
EXISTS nosuchkey
SET key2 "World"
EXISTS key1 key2 nosuchkey
```

## History

- Starting with Redis version 3.0.3: Accepts multiple key arguments.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/exists/
