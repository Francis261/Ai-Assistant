# SINTER

Source: https://devdocs.io/redis/sinter/index

```
SINTER
```

```
SINTER key [key ...]
```

Returns the members of the set resulting from the intersection of all the given sets.

For example:

```
key1 = {a,b,c,d}
key2 = {c}
key3 = {a,c,e}
SINTER key1 key2 key3 = {c}
```

Keys that do not exist are considered to be empty sets. With one of the keys being an empty set, the resulting set is also empty (since set intersection with an empty set always results in an empty set).

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
SINTER key1 key2
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/sinter/
