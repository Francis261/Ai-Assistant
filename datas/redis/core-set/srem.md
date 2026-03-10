# SREM

Source: https://devdocs.io/redis/srem/index

```
SREM
```

```
SREM key member [member ...]
```

Remove the specified members from the set stored at key. Specified members that are not a member of this set are ignored. If key does not exist, it is treated as an empty set and this command returns 0.

An error is returned when the value stored at key is not a set.

## Return

Integer reply: the number of members that were removed from the set, not including non existing members.

## Examples

```
SADD myset "one"
SADD myset "two"
SADD myset "three"
SREM myset "one"
SREM myset "four"
SMEMBERS myset
```

## History

- Starting with Redis version 2.4.0: Accepts multiple member arguments.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/srem/
