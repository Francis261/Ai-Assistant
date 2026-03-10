# FT._LIST

Source: https://devdocs.io/redis/ft._list/index

```
FT._LIST
```

```
FT._LIST
```

Returns a list of all existing indexes.

The prefix _ in the command indicates, this is a temporary command.

In the future, a SCAN type of command will be added, for use when a database contains a large number of indices.

## Return

Array reply with index names.

## Examples

```
FT._LIST1)"idx"2)"movies"3)"imdb"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft._list/
