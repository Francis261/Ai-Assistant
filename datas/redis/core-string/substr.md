# SUBSTR

Source: https://devdocs.io/redis/substr/index

```
SUBSTR (deprecated)
```

As of Redis version 2.0.0, this command is regarded as deprecated.

It can be replaced by GETRANGE when migrating or writing new code.

```
SUBSTR key start end
```

Returns the substring of the string value stored at key, determined by the offsets start and end (both are inclusive). Negative offsets can be used in order to provide an offset starting from the end of the string. So -1 means the last character, -2 the penultimate and so forth.

The function handles out of range requests by limiting the resulting range to the actual length of the string.

## Return

Bulk string reply

## Examples

```
SET mykey "This is a string"
GETRANGE mykey 0 3
GETRANGE mykey -3 -1
GETRANGE mykey 0 -1
GETRANGE mykey 10 100
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/substr/
