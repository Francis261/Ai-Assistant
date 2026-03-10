# FT.ALIASUPDATE

Source: https://devdocs.io/redis/ft.aliasupdate/index

```
FT.ALIASUPDATE
```

```
FT.ALIASUPDATE alias index
```

Add an alias to an index. If the alias is already associated with another index, FT.ALIASUPDATE removes the alias association with the previous index.

Examples

## Required arguments

is alias to be added to an index.

## Return

FT.ALIASUPDATE returns a simple string reply OK if executed correctly, or an error reply otherwise.

## Examples

Update the alias of an index.

```
127.0.0.1:6379> FT.ALIASUPDATE alias idx
OK
```

## See also

FT.ALIASADD | FT.ALIASDEL

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.aliasupdate/
