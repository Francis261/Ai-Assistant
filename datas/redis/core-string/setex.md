# SETEX

Source: https://devdocs.io/redis/setex/index

```
SETEX (deprecated)
```

As of Redis version 2.6.12, this command is regarded as deprecated.

It can be replaced by SET with the EX argument when migrating or writing new code.

```
SETEX key seconds value
```

Set key to hold the string value and set key to timeout after a given number of seconds. This command is equivalent to:

```
SET key value EX seconds
```

An error is returned when seconds is invalid.

## Return

Simple string reply

## Examples

```
SETEX mykey 10 "Hello"
TTL mykey
GET mykey
```

## See also

TTL

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/setex/
