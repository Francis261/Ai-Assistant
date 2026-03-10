# SISMEMBER

Source: https://devdocs.io/redis/sismember/index

```
SISMEMBER
```

```
SISMEMBER key member
```

Returns if member is a member of the set stored at key.

## Return

Integer reply, specifically:

- 1 if the element is a member of the set.
- 0 if the element is not a member of the set, or if key does not exist.

## Examples

```
SADD myset "one"
SISMEMBER myset "one"
SISMEMBER myset "two"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/sismember/
