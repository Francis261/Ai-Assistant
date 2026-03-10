# FT.CURSOR

Source: https://devdocs.io/redis/ft.cursor-read/index

```
FT.CURSOR READ
```

```
FT.CURSOR READ index cursor_id [COUNT read_size]
```

Read next results from an existing cursor

Examples

See Cursor API for more details.

## Required arguments

is index name.

is id of the cursor.

is number of results to read. This parameter overrides COUNT specified in FT.AGGREGATE.

## Return

FT.CURSOR DEL returns an array reply where each row is an array reply and represents a single aggregate result.

## Examples

```
127.0.0.1:6379> FT.CURSOR READ idx 342459320 COUNT 50
```

## See also

FT.CURSOR DEL | FT.AGGREGATE

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.cursor-read/
