# FT.SUGDEL

Source: https://devdocs.io/redis/ft.sugdel/index

```
FT.SUGDEL
```

```
FT.SUGDEL key string
```

Delete a string from a suggestion index

Examples

## Required arguments

is suggestion dictionary key.

is suggestion string to index.

## Return

FT.SUGDEL returns an integer reply, 1 if the string was found and deleted, 0 otherwise.

## Examples

```
127.0.0.1:6379> FT.SUGDEL sug "hello"
(integer) 1
127.0.0.1:6379> FT.SUGDEL sug "hello"
(integer) 0
```

## See also

FT.SUGGET | FT.SUGADD | FT.SUGLEN

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.sugdel/
