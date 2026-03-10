# FT.TAGVALS

Source: https://devdocs.io/redis/ft.tagvals/index

```
FT.TAGVALS
```

```
FT.TAGVALS index field_name
```

Return a distinct set of values indexed in a Tag field

Examples

## Required arguments

is full-text index name. You must first create the index using FT.CREATE.

is name of a Tag file defined in the schema.

Use FT.TAGVALS if your tag indexes things like cities, categories, and so on.

## Limitations

FT.TAGVALS provides no paging or sorting, and the tags are not alphabetically sorted. FT.TAGVALS only operates on tag fields. The returned strings are lowercase with whitespaces removed, but otherwise unchanged.

## Return

FT.TAGVALS returns an array reply of all distinct tags in the tag index.

## Examples

```
127.0.0.1:6379> FT.TAGVALS idx myTag
1) "Hello"
2) "World"
```

## See also

FT.CREATE

## Related topics

- Tag fields
- RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.tagvals/
