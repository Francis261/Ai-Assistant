# FT.ALIASADD

Source: https://devdocs.io/redis/ft.aliasadd/index

```
FT.ALIASADD
```

```
FT.ALIASADD alias index
```

Add an alias to an index

Examples

## Required arguments

is alias to be added to an index.

Indexes can have more than one alias, but an alias cannot refer to another alias.

FT.ALISSADD allows administrators to transparently redirect application queries to alternative indexes.

## Return

FT.ALIASADD returns a simple string reply OK if executed correctly, or an error reply otherwise.

## Examples

Add an alias to an index.

```
127.0.0.1:6379> FT.ALIASADD alias idx
OK
```

Attempting to add the same alias returns a message that the alias already exists.

```
127.0.0.1:6379> FT.ALIASADD alias idx
(error) Alias already exists
```

## See also

FT.ALIASDEL | FT.ALIASUPDATE

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.aliasadd/
