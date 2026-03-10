# CF.MEXISTS

Source: https://devdocs.io/redis/cf.mexists/index

```
CF.MEXISTS
```

```
CF.MEXISTS key item [item ...]
```

Check if one or more items exists in a Cuckoo Filter key

### Parameters

- key: The name of the filter
- items: The item to check for

## Return

Array reply of Integer reply - for each item where "1" value means the corresponding item may exist in the filter, and a "0" value means it does not exist in the filter.

## Examples

```
redis> CF.MEXISTS cf item1 item_new
1) (integer) 1
2) (integer) 0
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cf.mexists/
