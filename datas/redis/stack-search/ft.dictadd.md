# FT.DICTADD

Source: https://devdocs.io/redis/ft.dictadd/index

```
FT.DICTADD
```

```
FT.DICTADD dict term [term ...]
```

Add terms to a dictionary

Examples

## Required arguments

is dictionary name.

term to add to the dictionary.

## Return

FT.DICTADD returns an integer reply, the number of new terms that were added.

## Examples

```
127.0.0.1:6379> FT.DICTADD dict foo bar "hello world"
(integer) 3
```

## See also

FT.DICTDEL | FT.DICTDUMP

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.dictadd/
