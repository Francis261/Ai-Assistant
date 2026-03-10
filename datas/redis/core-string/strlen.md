# STRLEN

Source: https://devdocs.io/redis/strlen/index

```
STRLEN
```

```
STRLEN key
```

Returns the length of the string value stored at key. An error is returned when key holds a non-string value.

## Return

Integer reply: the length of the string at key, or 0 when key does not exist.

## Examples

```
SET mykey "Hello world"
STRLEN mykey
STRLEN nonexisting
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/strlen/
