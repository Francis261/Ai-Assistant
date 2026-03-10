# JSON.DEL

Source: https://devdocs.io/redis/json.del/index

```
JSON.DEL
```

```
JSON.DEL key [path]
```

Delete a value

Examples

## Required arguments

is key to modify.

## Optional arguments

is JSONPath to specify. Default is root $. Nonexisting paths are ignored.

Deleting an object's root is equivalent to deleting the key from Redis.

## Return

JSON.DEL returns an integer reply specified as the number of paths deleted (0 or more). For more information about replies, see Redis serialization protocol specification.

## Examples

Create a JSON document.

```
127.0.0.1:6379> JSON.SET doc $ '{"a": 1, "nested": {"a": 2, "b": 3}}'
OK
```

Delete specified values.

```
127.0.0.1:6379> JSON.DEL doc $..a
(integer) 2
```

Get the updated document.

```
127.0.0.1:6379> JSON.GET doc $
"[{\"nested\":{\"b\":3}}]"
```

## See also

JSON.SET | JSON.ARRLEN

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.del/
