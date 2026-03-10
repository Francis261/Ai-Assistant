# JSON.ARRAPPEND

Source: https://devdocs.io/redis/json.arrappend/index

```
JSON.ARRAPPEND
```

```
JSON.ARRAPPEND key [path] value [value ...]
```

Append the json values into the array at path after the last element in it

Examples

## Required arguments

is key to modify.

is one or more values to append to one or more arrays.

To specify a string as an array value to append, wrap the quoted string with an additional set of single quotes. Example: '"silver"'. For more detailed use, see Examples.

## Optional arguments

is JSONPath to specify. Default is root $.

## Return value

JSON.ARRAPEND returns an array of integer replies for each path, the array's new size, or nil, if the matching JSON value is not an array. For more information about replies, see Redis serialization protocol specification.

## Examples

Create a document for noise-cancelling headphones in black and silver colors.

```
127.0.0.1:6379> JSON.SET item:1 $ '{"name":"Noise-cancelling Bluetooth headphones","description":"Wireless Bluetooth headphones with noise-cancelling technology","connection":{"wireless":true,"type":"Bluetooth"},"price":99.98,"stock":25,"colors":["black","silver"]}'
OK
```

Add color blue to the end of the colors array. JSON.ARRAPEND returns the array's new size.

```
127.0.0.1:6379> JSON.ARRAPPEND item:1 $.colors '"blue"'
1) (integer) 3
```

Return the new length of the colors array.

```
127.0.0.1:6379> JSON.GET item:1
"{\"name\":\"Noise-cancelling Bluetooth headphones\",\"description\":\"Wireless Bluetooth headphones with noise-cancelling technology\",\"connection\":{\"wireless\":true,\"type\":\"Bluetooth\"},\"price\":99.98,\"stock\":25,\"colors\":[\"black\",\"silver\",\"blue\"]}"
```

## See also

JSON.ARRINDEX | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.arrappend/
