# CMS.QUERY

Source: https://devdocs.io/redis/cms.query/index

```
CMS.QUERY
```

```
CMS.QUERY key item [item ...]
```

Returns the count for one or more items in a sketch.

### Parameters:

- key: The name of the sketch.
- item: One or more items for which to return the count.

## Return

Count of one or more items

Array reply of Integer reply with a min-count of each of the items in the sketch.

## Examples

```
redis> CMS.QUERY test foo bar
1) (integer) 10
2) (integer) 42
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cms.query/
