# JSON.TYPE

Source: https://devdocs.io/redis/json.type/index

```
JSON.TYPE
```

```
JSON.TYPE key [path]
```

Report the type of JSON value at path

Examples

## Required arguments

is key to parse.

## Optional arguments

is JSONPath to specify. Default is root $. Returns null if the key or path do not exist.

## Return

JSON.TYPE returns an array of string replies for each path, specified as the value's type. For more information about replies, see Redis serialization protocol specification.

## Examples

```
127.0.0.1:6379> JSON.SET doc $ '{"a":2, "nested": {"a": true}, "foo": "bar"}'
OK
127.0.0.1:6379> JSON.TYPE doc $..foo
1) "string"
127.0.0.1:6379> JSON.TYPE doc $..a
1) "integer"
2) "boolean"
127.0.0.1:6379> JSON.TYPE doc $..dummy
```

## See also

JSON.SET | JSON.ARRLEN

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.type/
