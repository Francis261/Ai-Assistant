# FT.ALIASDEL

Source: https://devdocs.io/redis/ft.aliasdel/index

```
FT.ALIASDEL
```

```
FT.ALIASDEL alias
```

Remove an alias from an index

Examples

## Required arguments

is index alias to be removed.

## Return

FT.ALIASDEL returns a simple string reply OK if executed correctly, or an error reply otherwise.

## Examples

Remove an alias from an index.

```
127.0.0.1:6379> FT.ALIASDEL alias
OK
```

## See also

FT.ALIASADD | FT.ALIASUPDATE

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.aliasdel/
