# JSON.OBJLEN

Source: https://devdocs.io/redis/json.objlen/index

```
JSON.OBJLEN
```

```
JSON.OBJLEN key [path]
```

Report the number of keys in the JSON object at path in key

Examples

## Required arguments

is key to parse. Returns null for nonexistent keys.

## Optional arguments

is JSONPath to specify. Default is root $. Returns null for nonexistant path.

## Return

JSON.OBJLEN returns an array of integer replies for each path specified as the number of keys in the object or nil, if the matching JSON value is not an object. For more information about replies, see Redis serialization protocol specification.

## Examples

```
127.0.0.1:6379> JSON.SET doc $ '{"a":[3], "nested": {"a": {"b":2, "c": 1}}}'
OK
127.0.0.1:6379> JSON.OBJLEN doc $..a
1) (nil)
2) (integer) 2
```

## See also

JSON.ARRINDEX | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.objlen/
