# JSON.ARRPOP

Source: https://devdocs.io/redis/json.arrpop/index

```
JSON.ARRPOP
```

```
JSON.ARRPOP key [path [index]]
```

Remove and return an element from the index in the array

Examples

## Required arguments

is key to modify.

is position in the array to start popping from. Default is -1, meaning the last element. Out-of-range indexes round to their respective array ends. Popping an empty array returns null.

## Optional arguments

is JSONPath to specify. Default is root $.

## Return

JSON.ARRPOP returns an array of bulk string replies for each path, each reply is the popped JSON value, or nil, if the matching JSON value is not an array. For more information about replies, see Redis serialization protocol specification.

## Examples

Create two headphone products with maximum sound levels.

```
127.0.0.1:6379> JSON.SET key $ '[{"name":"Healthy headphones","description":"Wireless Bluetooth headphones with noise-cancelling technology","connection":{"wireless":true,"type":"Bluetooth"},"price":99.98,"stock":25,"colors":["black","silver"],"max_level":[60,70,80]},{"name":"Noisy headphones","description":"Wireless Bluetooth headphones with noise-cancelling technology","connection":{"wireless":true,"type":"Bluetooth"},"price":99.98,"stock":25,"colors":["black","silver"],"max_level":[80,90,100,120]}]'
OK
```

Get all maximum values for the second product.

```
127.0.0.1:6379> JSON.GET key $.[1].max_level
"[[80,90,100,120]]"
```

Update the max_level field of the product: remove an unavailable value and add a newly available value.

```
127.0.0.1:6379> JSON.ARRPOP key $.[1].max_level 0
1) "80"
```

Get the updated array.

```
127.0.0.1:6379> JSON.GET key $.[1].max_level
"[[90,100,120]]"
```

Now insert a new lowest value.

```
127.0.0.1:6379> JSON.ARRINSERT key $.[1].max_level 0 85
1) (integer) 4
```

Get the updated array.

```
127.0.0.1:6379> JSON.GET key $.[1].max_level
"[[85,90,100,120]]"
```

## See also

JSON.ARRAPPEND | JSON.ARRINDEX

## Related topics

- RedisJSON
- Index and search JSON documents

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/json.arrpop/
