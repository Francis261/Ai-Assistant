# FT.DICTDEL

Source: https://devdocs.io/redis/ft.dictdel/index

```
FT.DICTDEL
```

```
FT.DICTDEL dict term [term ...]
```

Delete terms from a dictionary

Examples

## Required arguments

is dictionary name.

term to delete from the dictionary.

## Return

FT.DICTDEL returns an integer reply, the number of new terms that were deleted.

## Examples

```
127.0.0.1:6379> FT.DICTDEL dict foo bar "hello world"
(integer) 3
```

## See also

FT.DICTADD | FT.DICTDUMP

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.dictdel/
