# SDIFF

Source: https://devdocs.io/redis/sdiff/index

```
SDIFF
```

```
SDIFF key [key ...]
```

Returns the members of the set resulting from the difference between the first set and all the successive sets.

For example:

```
key1 = {a,b,c,d}
key2 = {c}
key3 = {a,c,e}
SDIFF key1 key2 key3 = {b,d}
```

Keys that do not exist are considered to be empty sets.

## Return

Array reply: list with members of the resulting set.

## Examples

```
SADD key1 "a"
SADD key1 "b"
SADD key1 "c"
SADD key2 "c"
SADD key2 "d"
SADD key2 "e"
SDIFF key1 key2
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/sdiff/
