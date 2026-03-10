# LREM

Source: https://devdocs.io/redis/lrem/index

```
LREM
```

```
LREM key count element
```

Removes the first count occurrences of elements equal to element from the list stored at key. The count argument influences the operation in the following ways:

- count > 0: Remove elements equal to element moving from head to tail.
- count < 0: Remove elements equal to element moving from tail to head.
- count = 0: Remove all elements equal to element.

For example, LREM list -2 "hello" will remove the last two occurrences of "hello" in the list stored at list.

Note that non-existing keys are treated like empty lists, so when key does not exist, the command will always return 0.

## Return

Integer reply: the number of removed elements.

## Examples

```
RPUSH mylist "hello"
RPUSH mylist "hello"
RPUSH mylist "foo"
RPUSH mylist "hello"
LREM mylist -2 "hello"
LRANGE mylist 0 -1
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/lrem/
