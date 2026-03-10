# JSON.ARRINDEX

Source: https://devdocs.io/redis/json.arrindex/index

```
JSON.ARRINDEX
```

```
JSON.ARRINDEX key path value [start [stop]]
```

Search for the first occurrence of a JSON value in an array

Examples

## Required arguments

is key to parse.

is JSONPath to specify.

is value to find its index in one or more arrays.

To specify a string as an array value to index, wrap the quoted string with an additional set of single quotes. Example: '"silver"'. For more detailed use, see Examples.

## Optional arguments

is inclusive start value to specify in a slice of the array to search. Default is 0.

is exclusive stop value to specify in a slice of the array to search, including the last element. Default is 0. Negative values are interpreted as starting from the end.

Out-of-range indexes round to the array's start and end. An inverse index range (such as the range from 1 to 0) returns unfound or -1.

## Return value

JSON.ARRINDEX returns an array of integer replies for each path, the first position in the array of each JSON value that matches the path, -1 if unfound in the array, or nil, if the matching JSON value is not an array. For more information about replies, see Redis serialization protocol specification.

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
JSON.GET item:1
"{\"name\":\"Noise-cancelling Bluetooth headphones\",\"description\":\"Wireless Bluetooth headphones with noise-cancelling technology\",\"connection\":{\"wireless\":true,\"type\":\"Bluetooth\"},\"price\":99.98,\"stock\":25,\"colors\":[\"black\",\"silver\",\"blue\"]}"
```

Get the list of colors for the product.

```
127.0.0.1:6379> JSON.GET item:1 '$.colors[*]'
"[\"black\",\"silver\",\"blue\"]"
```

Insert two more colors after the second color. You now have five colors.

```
127.0.0.1:6379> JSON.ARRINSERT item:1 $.colors 2 '"yellow"' '"gold"'
1) (integer) 5
```

Get the updated list of colors.

```
127.0.0.1:6379> JSON.GET item:1 $.colors
"[[\"black\",\"silver\",\"yellow\",\"gold\",\"blue\"]]"
```

Find the place where color silver is located.

```
127.0.0.1:6379> JSON.ARRINDEX item:1 $..colors '"silver"'
1) (integer) 1
```

## See also

JSON.ARRAPPEND | JSON.ARRINSERT

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.arrindex/
