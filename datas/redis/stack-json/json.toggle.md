# JSON.TOGGLE

Source: https://devdocs.io/redis/json.toggle/index

```
JSON.TOGGLE
```

```
JSON.TOGGLE key path
```

Toggle a Boolean value stored at path

Examples

## Required arguments

is key to modify.

## Optional arguments

is JSONPath to specify. Default is root $.

## Return

JSON.TOGGLE returns an array of integer replies for each path, the new value (0 if false or 1 if true), or nil for JSON values matching the path that are not Boolean. For more information about replies, see Redis serialization protocol specification.

## Examples

Create a JSON document.

```
127.0.0.1:6379> JSON.SET doc $ '{"bool": true}'
OK
```

Toggle the Boolean value.

```
127.0.0.1:6379> JSON.TOGGLE doc $.bool
1) (integer) 0
```

Get the updated document.

```
127.0.0.1:6379> JSON.GET doc $
"[{\"bool\":false}]"
```

Toggle the Boolean value.

```
127.0.0.1:6379> JSON.TOGGLE doc $.bool
1) (integer) 1
```

Get the updated document.

```
127.0.0.1:6379> JSON.GET doc $
"[{\"bool\":true}]"
```

## See also

JSON.SET | JSON.GET

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.toggle/
