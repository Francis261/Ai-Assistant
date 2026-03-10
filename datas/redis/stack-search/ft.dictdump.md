# FT.DICTDUMP

Source: https://devdocs.io/redis/ft.dictdump/index

```
FT.DICTDUMP
```

```
FT.DICTDUMP dict
```

Dump all terms in the given dictionary

Examples

## Required argumemts

is dictionary name.

## Return

FT.DICTDUMP returns an array, where each element is term (string).

## Examples

```
127.0.0.1:6379> FT.DICTDUMP dict
1) "foo"
2) "bar"
3) "hello world"
```

## See also

FT.DICTADD | FT.DICTDEL

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.dictdump/
