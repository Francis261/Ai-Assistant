# BF.MEXISTS

Source: https://devdocs.io/redis/bf.mexists/index

```
BF.MEXISTS
```

```
BF.MEXISTS key item [item ...]
```

Determines if one or more items may exist in the filter or not.

### Parameters

- key: The name of the filter
- items: One or more items to check

## Return

Array reply of Integer reply - for each item where "1" value means the corresponding item may exist in the filter, and a "0" value means it does not exist in the filter.

## Examples

```
redis> BF.MEXISTS bf item1 item_new
1) (integer) 1
2) (integer) 0
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/bf.mexists/
