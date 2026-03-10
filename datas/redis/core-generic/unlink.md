# UNLINK

Source: https://devdocs.io/redis/unlink/index

```
UNLINK
```

```
UNLINK key [key ...]
```

This command is very similar to DEL: it removes the specified keys. Just like DEL a key is ignored if it does not exist. However the command performs the actual memory reclaiming in a different thread, so it is not blocking, while DEL is. This is where the command name comes from: the command just unlinks the keys from the keyspace. The actual removal will happen later asynchronously.

## Return

Integer reply: The number of keys that were unlinked.

## Examples

```
SET key1 "Hello"
SET key2 "World"
UNLINK key1 key2 key3
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/unlink/
