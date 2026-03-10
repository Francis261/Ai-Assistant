# LPOP

Source: https://devdocs.io/redis/lpop/index

```
LPOP
```

```
LPOP key [count]
```

Removes and returns the first elements of the list stored at key.

By default, the command pops a single element from the beginning of the list. When provided with the optional count argument, the reply will consist of up to count elements, depending on the list's length.

## Return

When called without the count argument:

Bulk string reply: the value of the first element, or nil when key does not exist.

When called with the count argument:

Array reply: list of popped elements, or nil when key does not exist.

## Examples

```
RPUSH mylist "one" "two" "three" "four" "five"
LPOP mylist
LPOP mylist 2
LRANGE mylist 0 -1
```

## History

- Starting with Redis version 6.2.0: Added the count argument.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/lpop/
