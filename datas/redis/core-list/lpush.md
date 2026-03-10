# LPUSH

Source: https://devdocs.io/redis/lpush/index

```
LPUSH
```

```
LPUSH key element [element ...]
```

Insert all the specified values at the head of the list stored at key. If key does not exist, it is created as empty list before performing the push operations. When key holds a value that is not a list, an error is returned.

It is possible to push multiple elements using a single command call just specifying multiple arguments at the end of the command. Elements are inserted one after the other to the head of the list, from the leftmost element to the rightmost element. So for instance the command LPUSH mylist a b c will result into a list containing c as first element, b as second element and a as third element.

## Return

Integer reply: the length of the list after the push operations.

## Examples

```
LPUSH mylist "world"
LPUSH mylist "hello"
LRANGE mylist 0 -1
```

## History

- Starting with Redis version 2.4.0: Accepts multiple element arguments.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/lpush/
