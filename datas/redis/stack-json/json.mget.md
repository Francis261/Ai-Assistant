# JSON.MGET

Source: https://devdocs.io/redis/json.mget/index

```
JSON.MGET
```

```
JSON.MGET key [key ...] path
```

Return the values at path from multiple key arguments

Examples

## Required arguments

is key to parse. Returns null for nonexistent keys.

## Optional arguments

is JSONPath to specify. Default is root $. Returns null for nonexistent paths.

## Return

JSON.MGET returns an array of bulk string replies specified as the JSON serialization of the value at each key's path. For more information about replies, see Redis serialization protocol specification.

## Examples

Create two JSON documents.

```
redis> JSON.SET doc1 $ '{"a":1, "b": 2, "nested": {"a": 3}, "c": null}'
OK
redis> JSON.SET doc2 $ '{"a":4, "b": 5, "nested": {"a": 6}, "c": null}'
OK
```

Get values from all arguments in the documents.

```
redis> JSON.MGET doc1 doc2 $..a
1) "[1,3]"
2) "[4,6]"
```

## See also

JSON.SET | JSON.GET

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.mget/
