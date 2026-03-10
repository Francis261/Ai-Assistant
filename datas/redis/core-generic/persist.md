# PERSIST

Source: https://devdocs.io/redis/persist/index

```
PERSIST
```

```
PERSIST key
```

Remove the existing timeout on key, turning the key from volatile (a key with an expire set) to persistent (a key that will never expire as no timeout is associated).

## Return

Integer reply, specifically:

- 1 if the timeout was removed.
- 0 if key does not exist or does not have an associated timeout.

## Examples

```
SET mykey "Hello"
EXPIRE mykey 10
TTL mykey
PERSIST mykey
TTL mykey
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/persist/
