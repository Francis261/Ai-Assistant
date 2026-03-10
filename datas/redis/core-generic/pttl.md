# PTTL

Source: https://devdocs.io/redis/pttl/index

```
PTTL
```

```
PTTL key
```

Like TTL this command returns the remaining time to live of a key that has an expire set, with the sole difference that TTL returns the amount of remaining time in seconds while PTTL returns it in milliseconds.

In Redis 2.6 or older the command returns -1 if the key does not exist or if the key exist but has no associated expire.

Starting with Redis 2.8 the return value in case of error changed:

- The command returns -2 if the key does not exist.
- The command returns -1 if the key exists but has no associated expire.

## Return

Integer reply: TTL in milliseconds, or a negative value in order to signal an error (see the description above).

## Examples

```
SET mykey "Hello"
EXPIRE mykey 1
PTTL mykey
```

## History

- Starting with Redis version 2.8.0: Added the -2 reply.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/pttl/
