# JSON.NUMMULTBY

Source: https://devdocs.io/redis/json.nummultby/index

```
JSON.NUMMULTBY (deprecated)
```

As of Redis version 2.0, this command is regarded as deprecated.

```
JSON.NUMMULTBY key path value
```

Multiply the number value stored at path by number

Examples

## Required arguments

is key to modify.

is number value to multiply.

## Optional arguments

is JSONPath to specify. Default is root $.

## Return

JSON.NUMMULTBY returns a bulk string reply specified as a stringified new values for each path, or nil element if the matching JSON value is not a number. For more information about replies, see Redis serialization protocol specification.

## Examples

```
127.0.0.1:6379> JSON.SET doc . '{"a":"b","b":[{"a":2}, {"a":5}, {"a":"c"}]}'
OK
127.0.0.1:6379> JSON.NUMMULTBY doc $.a 2
"[null]"
127.0.0.1:6379> JSON.NUMMULTBY doc $..a 2
"[null,4,10,null]"
```

## See also

JSON.NUMINCRBY | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.nummultby/
