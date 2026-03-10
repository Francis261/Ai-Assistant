# JSON.OBJKEYS

Source: https://devdocs.io/redis/json.objkeys/index

```
JSON.OBJKEYS
```

```
JSON.OBJKEYS key [path]
```

Return the keys in the object that's referenced by path

Examples

## Required arguments

is key to parse. Returns null for nonexistent keys.

## Optional arguments

is JSONPath to specify. Default is root $. Returns null for nonexistant path.

## Return

JSON.OBJKEYS returns an array of array replies for each path, an array of the key names in the object as a bulk string reply, or nil if the matching JSON value is not an object. For more information about replies, see Redis serialization protocol specification.

## Examples

```
127.0.0.1:6379> JSON.SET doc $ '{"a":[3], "nested": {"a": {"b":2, "c": 1}}}'
OK
127.0.0.1:6379> JSON.OBJKEYS doc $..a
1) (nil)
2) 1) "b"
   2) "c"
```

## See also

JSON.ARRINDEX | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.objkeys/
