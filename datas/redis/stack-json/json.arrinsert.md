# JSON.ARRINSERT

Source: https://devdocs.io/redis/json.arrinsert/index

```
JSON.ARRINSERT
```

```
JSON.ARRINSERT key path index value [value ...]
```

Insert the json values into the array at path before the index (shifts to the right)

Examples

## Required arguments

is key to modify.

is one or more values to insert in one or more arrays.

To specify a string as an array value to insert, wrap the quoted string with an additional set of single quotes. Example: '"silver"'. For more detailed use, see Examples.

is position in the array where you want to insert a value. The index must be in the array's range. Inserting at index 0 prepends to the array. Negative index values start from the end of the array.

## Optional arguments

is JSONPath to specify. Default is root $.

## Return value

JSON.ARRINSERT returns an array of integer replies for each path, the array's new size, or nil, if the matching JSON value is not an array. For more information about replies, see Redis serialization protocol specification.

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

## See also

JSON.ARRAPPEND | JSON.ARRINDEX

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.arrinsert/
