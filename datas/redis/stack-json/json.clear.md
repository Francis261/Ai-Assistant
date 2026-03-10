# JSON.CLEAR

Source: https://devdocs.io/redis/json.clear/index

```
JSON.CLEAR
```

```
JSON.CLEAR key [path]
```

Clear container values (arrays/objects) and set numeric values to 0

Examples

## Required arguments

is key to parse.

## Optional arguments

is JSONPath to specify. Default is root $. Nonexisting paths are ignored.

## Return

JSON.CLEAR returns an integer reply specified as the number of values cleared. For more information about replies, see Redis serialization protocol specification.

Already cleared values are ignored for empty containers and zero numbers.

## Examples

Create a JSON document.

```
127.0.0.1:6379> JSON.SET doc $ '{"obj":{"a":1, "b":2}, "arr":[1,2,3], "str": "foo", "bool": true, "int": 42, "float": 3.14}'
OK
```

Clear all container values. This returns the number of objects with cleared values.

```
127.0.0.1:6379> JSON.CLEAR doc $.*
(integer) 4
```

Get the updated document. Note that numeric values have been set to 0.

```
127.0.0.1:6379> JSON.GET doc $
"[{\"obj\":{},\"arr\":[],\"str\":\"foo\",\"bool\":true,\"int\":0,\"float\":0}]"
```

## See also

JSON.ARRINDEX | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.clear/
