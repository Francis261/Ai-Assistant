# FT.SYNDUMP

Source: https://devdocs.io/redis/ft.syndump/index

```
FT.SYNDUMP
```

```
FT.SYNDUMP index
```

Dump the contents of a synonym group

Examples

## Required arguments

is index name.

Use FT.SYNDUMP to dump the synonyms data structure. This command returns a list of synonym terms and their synonym group ids.

## Return

FT.SYNDUMP returns an array reply, with a pair of term and an array of synonym groups.

## Examples

```
127.0.0.1:6379> FT.SYNDUMP idx
1) "shalom"
2) 1) "synonym1"
   2) "synonym2"
3) "hi"
4) 1) "synonym1"
5) "hello"
6) 1) "synonym1"
```

## See also

FT.SYNUPDATE

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.syndump/
