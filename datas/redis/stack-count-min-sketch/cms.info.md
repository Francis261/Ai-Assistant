# CMS.INFO

Source: https://devdocs.io/redis/cms.info/index

```
CMS.INFO
```

```
CMS.INFO key
```

Returns width, depth and total count of the sketch.

### Parameters:

- key: The name of the sketch.

## Return

Array reply with information of the filter.

## Examples

```
redis> CMS.INFO test
 1) width
 2) (integer) 2000
 3) depth
 4) (integer) 7
 5) count
 6) (integer) 0
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cms.info/
