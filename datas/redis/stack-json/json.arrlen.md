# JSON.ARRLEN

Source: https://devdocs.io/redis/json.arrlen/index

```
JSON.ARRLEN
```

```
JSON.ARRLEN key [path]
```

Report the length of the JSON array at path in key

Examples

## Required arguments

is key to parse.

## Optional arguments

is JSONPath to specify. Default is root $, if not provided. Returns null if the key or path do not exist.

## Return

JSON.ARRLEN returns an array of integer replies, an integer for each matching value, each is the array's length, or nil, if the matching value is not an array. For more information about replies, see Redis serialization protocol specification.

## Examples

Create a document for wireless earbuds.

```
127.0.0.1:6379> JSON.SET item:2 $ '{"name":"Wireless earbuds","description":"Wireless Bluetooth in-ear headphones","connection":{"wireless":true,"type":"Bluetooth"},"price":64.99,"stock":17,"colors":["black","white"], "max_level":[80, 100, 120]}'
OK
```

Find lengths of arrays in all objects of the document.

```
127.0.0.1:6379> JSON.ARRLEN item:2 '$.[*]'
1) (nil)
2) (nil)
3) (nil)
4) (nil)
5) (nil)
6) (integer) 2
7) (integer) 3
```

Return the length of the max_level array.

```
127.0.0.1:6379> JSON.ARRLEN item:2 '$..max_level'
1) (integer) 3
```

Get all the maximum level values.

```
127.0.0.1:6379> JSON.GET item:2 '$..max_level'
"[[80,100,120]]"
```

## See also

JSON.ARRINDEX | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.arrlen/
