# FT.CURSOR

Source: https://devdocs.io/redis/ft.cursor-del/index

```
FT.CURSOR DEL
```

```
FT.CURSOR DEL index cursor_id
```

Delete a cursor

Examples

## Required arguments

is index name.

is id of the cursor.

## Returns

FT.CURSOR DEL returns a simple string reply OK if executed correctly, or an error reply otherwise.

## Examples

```
redis> FT.CURSOR DEL idx 342459320
OK
```

Check that the cursor is deleted.

```
127.0.0.1:6379> FT.CURSOR DEL idx 342459320
(error) Cursor does not exist
```

## See also

FT.CURSOR READ

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.cursor-del/
