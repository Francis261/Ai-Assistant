# SMISMEMBER

Source: https://devdocs.io/redis/smismember/index

```
SMISMEMBER
```

```
SMISMEMBER key member [member ...]
```

Returns whether each member is a member of the set stored at key.

For every member, 1 is returned if the value is a member of the set, or 0 if the element is not a member of the set or if key does not exist.

## Return

Array reply: list representing the membership of the given elements, in the same order as they are requested.

## Examples

```
SADD myset "one"
SADD myset "one"
SMISMEMBER myset "one" "notamember"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/smismember/
