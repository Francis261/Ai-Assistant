# JSON.SET

Source: https://devdocs.io/redis/json.set/index

```
JSON.SET
```

```
JSON.SET key path value [NX | XX]
```

Set the JSON value at path in key

Examples

## Required arguments

is key to modify.

is value to set at the specified path

## Optional arguments

is JSONPath to specify. Default is root $. For new Redis keys the path must be the root. For existing keys, when the entire path exists, the value that it contains is replaced with the json value. For existing keys, when the path exists, except for the last element, a new child is added with the json value.

Adds a key (with its respective value) to a JSON Object (in a RedisJSON data type key) only if it is the last child in the path, or it is the parent of a new child being added in the path. Optional arguments NX and XX modify this behavior for both new RedisJSON data type keys as well as the JSON Object keys in them.

sets the key only if it does not already exist.

sets the key only if it already exists.

## Return value

JSET.SET returns a simple string reply: OK if executed correctly or nil if the specified NX or XX conditions were not met. For more information about replies, see Redis serialization protocol specification.

## Examples

```
127.0.0.1:6379> JSON.SET doc $ '{"a":2}'
OK
127.0.0.1:6379> JSON.SET doc $.a '3'
OK
127.0.0.1:6379> JSON.GET doc $
"[{\"a\":3}]"
```

```
127.0.0.1:6379> JSON.SET doc $ '{"a":2}'
OK
127.0.0.1:6379> JSON.SET doc $.b '8'
OK
127.0.0.1:6379> JSON.GET doc $
"[{\"a\":2,\"b\":8}]"
```

```
127.0.0.1:6379> JSON.SET doc $ '{"f1": {"a":1}, "f2":{"a":2}}'
OK
127.0.0.1:6379> JSON.SET doc $..a 3
OK
127.0.0.1:6379> JSON.GET doc
"{\"f1\":{\"a\":3},\"f2\":{\"a\":3}}"
```

## See also

JSON.GET | JSON.MGET

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.set/
