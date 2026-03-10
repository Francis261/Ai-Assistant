# CF.INFO

Source: https://devdocs.io/redis/cf.info/index

```
CF.INFO
```

```
CF.INFO key
```

Return information about key

### Parameters

- key: Name of the key to restore

## Return

Array reply with information of the filter.

@example

```
redis> CF.INFO cf
 1) Size
 2) (integer) 1080
 3) Number of buckets
 4) (integer) 512
 5) Number of filter
 6) (integer) 1
 7) Number of items inserted
 8) (integer) 0
 9) Number of items deleted
10) (integer) 0
11) Bucket size
12) (integer) 2
13) Expansion rate
14) (integer) 1
15) Max iteration
16) (integer) 20
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cf.info/
