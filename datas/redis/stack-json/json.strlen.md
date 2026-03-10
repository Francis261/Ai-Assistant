# JSON.STRLEN

Source: https://devdocs.io/redis/json.strlen/index

```
JSON.STRLEN
```

```
JSON.STRLEN key [path]
```

Report the length of the JSON String at path in key

Examples

## Required arguments

is key to parse.

## Optional arguments

is JSONPath to specify. Default is root $, if not provided. Returns null if the key or path do not exist.

## Return

JSON.STRLEN returns by recursive descent an array of integer replies for each path, the array's length, or nil, if the matching JSON value is not a string. For more information about replies, see Redis serialization protocol specification.

## Examples

```
127.0.0.1:6379> JSON.SET doc $ '{"a":"foo", "nested": {"a": "hello"}, "nested2": {"a": 31}}'
OK
127.0.0.1:6379> JSON.STRLEN doc $..a
1) (integer) 3
2) (integer) 5
3) (nil)
```

## See also

JSON.ARRLEN | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.strlen/
