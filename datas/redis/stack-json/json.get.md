# JSON.GET

Source: https://devdocs.io/redis/json.get/index

```
JSON.GET
```

```
JSON.GET key [INDENT indent] [NEWLINE newline] [SPACE space] [path
  [path ...]]
```

Return the value at path in JSON serialized form

Examples

## Required arguments

is key to parse.

## Optional arguments

is JSONPath to specify. Default is root $. JSON.GET accepts multiple path arguments.

When using a single JSONPath, the root of the matching values is a JSON string with a top-level array of serialized JSON value. In contrast, a legacy path returns a single value.

When using multiple JSONPath arguments, the root of the matching values is a JSON string with a top-level object, with each object value being a top-level array of serialized JSON value. In contrast, if all paths are legacy paths, each object value is a single serialized JSON value. If there are multiple paths that include both legacy path and JSONPath, the returned value conforms to the JSONPath version (an array of values).

sets the indentation string for nested levels.

sets the string that's printed at the end of each line.

sets the string that's put between a key and a value.

Produce pretty-formatted JSON with redis-cli by following this example:

```
~/$ redis-cli --raw
127.0.0.1:6379> JSON.GET myjsonkey INDENT "\t" NEWLINE "\n" SPACE " " path.to.value[1]
```

## Return

JSON.GET returns a bulk string representing a JSON array of string replies. Each string is the JSON serialization of each JSON value that matches a path. Using multiple paths, JSON.GET returns a bulk string representing a JSON object with string values. Each string value is an array of the JSON serialization of each JSON value that matches a path. For more information about replies, see Redis serialization protocol specification.

## Examples

Create a JSON document.

```
127.0.0.1:6379> JSON.SET doc $ '{"a":2, "b": 3, "nested": {"a": 4, "b": null}}'
OK
```

With a single JSONPath (JSON array bulk string):

```
127.0.0.1:6379>  JSON.GET doc $..b
"[3,null]"
```

Using multiple paths with at least one JSONPath returns a JSON string with a top-level object with an array of JSON values per path:

```
127.0.0.1:6379> JSON.GET doc ..a $..b
"{\"$..b\":[3,null],\"..a\":[2,4]}"
```

## See also

JSON.SET | JSON.MGET

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.get/
