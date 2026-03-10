# SCARD

Source: https://devdocs.io/redis/scard/index

```
SCARD
```

```
SCARD key
```

Returns the set cardinality (number of elements) of the set stored at key.

## Return

Integer reply: the cardinality (number of elements) of the set, or 0 if key does not exist.

## Examples

```
SADD myset "Hello"
SADD myset "World"
SCARD myset
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/scard/
