# FT.SUGLEN

Source: https://devdocs.io/redis/ft.suglen/index

```
FT.SUGLEN
```

```
FT.SUGLEN key
```

Get the size of an auto-complete suggestion dictionary

Examples

## Required arguments

is suggestion dictionary key.

## Return

FT.SUGLEN returns an integer reply, which is the current size of the suggestion dictionary.

## Examples

```
127.0.0.1:6379> FT.SUGLEN sug
(integer) 2
```

## See also

FT.SUGADD | FT.SUGDEL | FT.SUGGET

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.suglen/
