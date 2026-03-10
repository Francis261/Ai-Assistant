# JSON.DEBUG

Source: https://devdocs.io/redis/json.debug-memory/index

```
JSON.DEBUG MEMORY
```

```
JSON.DEBUG MEMORY key [path]
```

Report a value's memory usage in bytes

Examples

## Required arguments

is key to parse.

## Optional arguments

is JSONPath to specify. Default is root $.

## Return

JSON.DEBUG MEMORY returns an integer reply specified as the value size in bytes. For more information about replies, see Redis serialization protocol specification.

## Examples

Create a JSON document.

```
127.0.0.1:6379> JSON.SET item:2 $ '{"name":"Wireless earbuds","description":"Wireless Bluetooth in-ear headphones","connection":{"wireless":true,"type":"Bluetooth"},"price":64.99,"stock":17,"colors":["black","white"], "max_level":[80, 100, 120]}'
OK
```

Get the values' memory usage in bytes.

```
127.0.0.1:6379> JSON.DEBUG MEMORY item:2
(integer) 253
```

## See also

JSON.SET | JSON.ARRLEN

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.debug-memory/
