# LSET

Source: https://devdocs.io/redis/lset/index

```
LSET
```

```
LSET key index element
```

Sets the list element at index to element. For more information on the index argument, see LINDEX.

An error is returned for out of range indexes.

## Return

Simple string reply

## Examples

```
RPUSH mylist "one"
RPUSH mylist "two"
RPUSH mylist "three"
LSET mylist 0 "four"
LSET mylist -2 "five"
LRANGE mylist 0 -1
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/lset/
