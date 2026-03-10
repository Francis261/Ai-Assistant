# RPUSHX

Source: https://devdocs.io/redis/rpushx/index

```
RPUSHX
```

```
RPUSHX key element [element ...]
```

Inserts specified values at the tail of the list stored at key, only if key already exists and holds a list. In contrary to RPUSH, no operation will be performed when key does not yet exist.

## Return

Integer reply: the length of the list after the push operation.

## Examples

```
RPUSH mylist "Hello"
RPUSHX mylist "World"
RPUSHX myotherlist "World"
LRANGE mylist 0 -1
LRANGE myotherlist 0 -1
```

## History

- Starting with Redis version 4.0.0: Accepts multiple element arguments.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/rpushx/
