# RPUSH

Source: https://devdocs.io/redis/rpush/index

```
RPUSH
```

```
RPUSH key element [element ...]
```

Insert all the specified values at the tail of the list stored at key. If key does not exist, it is created as empty list before performing the push operation. When key holds a value that is not a list, an error is returned.

It is possible to push multiple elements using a single command call just specifying multiple arguments at the end of the command. Elements are inserted one after the other to the tail of the list, from the leftmost element to the rightmost element. So for instance the command RPUSH mylist a b c will result into a list containing a as first element, b as second element and c as third element.

## Return

Integer reply: the length of the list after the push operation.

## Examples

```
RPUSH mylist "hello"
RPUSH mylist "world"
LRANGE mylist 0 -1
```

## History

- Starting with Redis version 2.4.0: Accepts multiple element arguments.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/rpush/
