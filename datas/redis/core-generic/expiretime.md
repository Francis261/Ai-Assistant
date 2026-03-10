# EXPIRETIME

Source: https://devdocs.io/redis/expiretime/index

```
EXPIRETIME
```

```
EXPIRETIME key
```

Returns the absolute Unix timestamp (since January 1, 1970) in seconds at which the given key will expire.

See also the PEXPIRETIME command which returns the same information with milliseconds resolution.

## Return

Integer reply: Expiration Unix timestamp in seconds, or a negative value in order to signal an error (see the description below).

- The command returns -1 if the key exists but has no associated expiration time.
- The command returns -2 if the key does not exist.

## Examples

```
SET mykey "Hello"
EXPIREAT mykey 33177117420
EXPIRETIME mykey
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/expiretime/
