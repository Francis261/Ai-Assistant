# SADD

Source: https://devdocs.io/redis/sadd/index

```
SADD
```

```
SADD key member [member ...]
```

Add the specified members to the set stored at key. Specified members that are already a member of this set are ignored. If key does not exist, a new set is created before adding the specified members.

An error is returned when the value stored at key is not a set.

## Return

Integer reply: the number of elements that were added to the set, not including all the elements already present in the set.

## Examples

```
SADD myset "Hello"
SADD myset "World"
SADD myset "World"
SMEMBERS myset
```

## History

- Starting with Redis version 2.4.0: Accepts multiple member arguments.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/sadd/
