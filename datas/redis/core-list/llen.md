# LLEN

Source: https://devdocs.io/redis/llen/index

```
LLEN
```

```
LLEN key
```

Returns the length of the list stored at key. If key does not exist, it is interpreted as an empty list and 0 is returned. An error is returned when the value stored at key is not a list.

## Return

Integer reply: the length of the list at key.

## Examples

```
LPUSH mylist "World"
LPUSH mylist "Hello"
LLEN mylist
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/llen/
