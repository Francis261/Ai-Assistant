# LINSERT

Source: https://devdocs.io/redis/linsert/index

```
LINSERT
```

```
LINSERT key <BEFORE | AFTER> pivot element
```

Inserts element in the list stored at key either before or after the reference value pivot.

When key does not exist, it is considered an empty list and no operation is performed.

An error is returned when key exists but does not hold a list value.

## Return

Integer reply: the list length after a successful insert operation, 0 if the key doesn't exist, and -1 when the pivot wasn't found.

## Examples

```
RPUSH mylist "Hello"
RPUSH mylist "World"
LINSERT mylist BEFORE "World" "There"
LRANGE mylist 0 -1
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/linsert/
