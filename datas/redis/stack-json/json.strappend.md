# JSON.STRAPPEND

Source: https://devdocs.io/redis/json.strappend/index

```
JSON.STRAPPEND
```

```
JSON.STRAPPEND key [path] value
```

Append the json-string values to the string at path

Examples

## Required arguments

is key to modify.

is value to append to one or more strings.

To specify a string as an array value to append, wrap the quoted string with an additional set of single quotes. Example: '"silver"'. For more detailed use, see Examples.

## Optional arguments

is JSONPath to specify. Default is root $.

## Return value

JSON.STRAPPEND returns an array of integer replies for each path, the string's new length, or nil, if the matching JSON value is not a string. For more information about replies, see Redis serialization protocol specification.

## Examples

```
127.0.0.1:6379> JSON.SET doc $ '{"a":"foo", "nested": {"a": "hello"}, "nested2": {"a": 31}}'
OK
127.0.0.1:6379> JSON.STRAPPEND doc $..a '"baz"'
1) (integer) 6
2) (integer) 8
3) (nil)
127.0.0.1:6379> JSON.GET doc $
"[{\"a\":\"foobaz\",\"nested\":{\"a\":\"hellobaz\"},\"nested2\":{\"a\":31}}]"
```

## See also

JSON.ARRAPEND | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.strappend/
