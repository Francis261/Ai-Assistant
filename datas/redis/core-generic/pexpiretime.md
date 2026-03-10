# PEXPIRETIME

Source: https://devdocs.io/redis/pexpiretime/index

```
PEXPIRETIME
```

```
PEXPIRETIME key
```

PEXPIRETIME has the same semantic as EXPIRETIME, but returns the absolute Unix expiration timestamp in milliseconds instead of seconds.

## Return

Integer reply: Expiration Unix timestamp in milliseconds, or a negative value in order to signal an error (see the description below).

- The command returns -1 if the key exists but has no associated expiration time.
- The command returns -2 if the key does not exist.

## Examples

```
SET mykey "Hello"
PEXPIREAT mykey 33177117420000
PEXPIRETIME mykey
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/pexpiretime/
