# PSETEX

Source: https://devdocs.io/redis/psetex/index

```
PSETEX (deprecated)
```

As of Redis version 2.6.12, this command is regarded as deprecated.

It can be replaced by SET with the PX argument when migrating or writing new code.

```
PSETEX key milliseconds value
```

PSETEX works exactly like SETEX with the sole difference that the expire time is specified in milliseconds instead of seconds.

## Examples

```
PSETEX mykey 1000 "Hello"
PTTL mykey
GET mykey
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/psetex/
