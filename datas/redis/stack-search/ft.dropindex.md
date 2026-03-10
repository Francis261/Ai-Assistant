# FT.DROPINDEX

Source: https://devdocs.io/redis/ft.dropindex/index

```
FT.DROPINDEX
```

```
FT.DROPINDEX index 
  [DD]
```

Delete an index

Examples

## Required arguments

is full-text index name. You must first create the index using FT.CREATE.

## Optional arguments

drop operation that, if set, deletes the actual document hashes.

By default, FT.DROPINDEX does not delete the documents associated with the index. Adding the DD option deletes the documents as well. If an index creation is still running (FT.CREATE is running asynchronously), only the document hashes that have already been indexed are deleted. The document hashes left to be indexed remain in the database. To check the completion of the indexing, use FT.INFO.

## Return

FT.DROPINDEX returns a simple string reply OK if executed correctly, or an error reply otherwise.

## Examples

```
127.0.0.1:6379> FT.DROPINDEX idx DD
OK
```

## See also

FT.CREATE | FT.INFO

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.dropindex/
