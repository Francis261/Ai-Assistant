# CMS.INCRBY

Source: https://devdocs.io/redis/cms.incrby/index

```
CMS.INCRBY
```

```
CMS.INCRBY key item increment [item increment ...]
```

Increases the count of item by increment. Multiple items can be increased with one call.

### Parameters:

- key: The name of the sketch.
- item: The item which counter is to be increased.
- increment: Amount by which the item counter is to be increased.

## Return

Array reply of Integer reply with an updated min-count of each of the items in the sketch.

Count of each item after increment.

## Examples

```
redis> CMS.INCRBY test foo 10 bar 42
1) (integer) 10
2) (integer) 42
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cms.incrby/
