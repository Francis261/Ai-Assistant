# JSON.ARRTRIM

Source: https://devdocs.io/redis/json.arrtrim/index

```
JSON.ARRTRIM
```

```
JSON.ARRTRIM key path start stop
```

Trim an array so that it contains only the specified inclusive range of elements

Examples

## Required arguments

is key to modify.

## Optional arguments

is JSONPath to specify. Default is root $.

is index of the first element to keep (previous elements are trimmed). Default is 0.

is the index of the last element to keep (following elements are trimmed), including the last element. Default is 0. Negative values are interpreted as starting from the end.

JSON.ARRTRIM is extremely forgiving, and using it with out-of-range indexes does not produce an error. Note a few differences between how RedisJSON v2.0 and legacy versions handle out-of-range indexes.

Behavior as of RedisJSON v2.0:

- If start is larger than the array's size or start > stop, returns 0 and an empty array.
- If start is < 0, then start from the end of the array.
- If stop is larger than the end of the array, it is treated like the last element.

## Return

JSON.ARRTRIM returns an array of integer replies for each path, the array's new size, or nil, if the matching JSON value is not an array. For more information about replies, see Redis serialization protocol specification.

## Examples

Create two headphone products with maximum sound levels.

```
127.0.0.1:6379> JSON.GET key $
"[[{\"name\":\"Healthy headphones\",\"description\":\"Wireless Bluetooth headphones with noise-cancelling technology\",\"connection\":{\"wireless\":true,\"type\":\"Bluetooth\"},\"price\":99.98,\"stock\":25,\"colors\":[\"black\",\"silver\"],\"max_level\":[60,70,80]},{\"name\":\"Noisy headphones\",\"description\":\"Wireless Bluetooth headphones with noise-cancelling technology\",\"connection\":{\"wireless\":true,\"type\":\"Bluetooth\"},\"price\":99.98,\"stock\":25,\"colors\":[\"black\",\"silver\"],\"max_level\":[85,90,100,120]}]]"
OK
```

Add new sound level values to the second product.

```
127.0.0.1:6379> JSON.ARRAPPEND key $.[1].max_level 140 160 180 200 220 240 260 280
1) (integer) 12
```

Get the updated array.

```
127.0.0.1:6379> JSON.GET key $.[1].max_level
"[[85,90,100,120,140,160,180,200,220,240,260,280]]"
```

Keep only the values between the fifth and the ninth element, inclusive of that last element.

```
127.0.0.1:6379> JSON.ARRTRIM key $.[1].max_level 4 8
1) (integer) 5
```

Get the updated array.

```
127.0.0.1:6379> JSON.GET key $.[1].max_level
"[[140,160,180,200,220]]"
```

## See also

JSON.ARRINDEX | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.arrtrim/
