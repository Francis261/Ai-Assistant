# FT.SYNUPDATE

Source: https://devdocs.io/redis/ft.synupdate/index

```
FT.SYNUPDATE
```

```
FT.SYNUPDATE index synonym_group_id 
  [SKIPINITIALSCAN] term [term ...]
```

Update a synonym group

Examples

## Required arguments

is index name.

is synonym group to return.

Use FT.SYNUPDATE to create or update a synonym group with additional terms. The command triggers a scan of all documents.

## Optional parameters

does not scan and index, and only documents that are indexed after the update are affected.

## Return

FT.SYNUPDATE returns a simple string reply OK if executed correctly, or an error reply otherwise.

## Examples

```
127.0.0.1:6379> FT.SYNUPDATE idx synonym hello hi shalom
OK
```

```
127.0.0.1:6379> FT.SYNUPDATE idx synonym SKIPINITIALSCAN hello hi shalom
OK
```

## See also

FT.SYNDUMP

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.synupdate/
