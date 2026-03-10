# JSON.NUMINCRBY

Source: https://devdocs.io/redis/json.numincrby/index

```
JSON.NUMINCRBY
```

```
JSON.NUMINCRBY key path value
```

Increment the number value stored at path by number

Examples

## Required arguments

is key to modify.

is JSONPath to specify.

is number value to increment.

## Return

JSON.NUMINCRBY returns a bulk string reply specified as a stringified new value for each path, or nil, if the matching JSON value is not a number. For more information about replies, see Redis serialization protocol specification.

## Examples

Create a document.

```
127.0.0.1:6379> JSON.SET doc . '{"a":"b","b":[{"a":2}, {"a":5}, {"a":"c"}]}'
OK
```

Increment a value of a object by 2. The command fails to find a number and returns null.

```
127.0.0.1:6379> JSON.NUMINCRBY doc $.a 2
"[null]"
```

Recursively find and increment a value of all a objects. The command increments numbers it finds and returns null for nonnumber values.

```
127.0.0.1:6379> JSON.NUMINCRBY doc $..a 2
"[null,4,7,null]"
```

## See also

JSON.ARRINDEX | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.numincrby/
