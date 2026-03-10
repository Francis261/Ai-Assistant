# FT.SUGADD

Source: https://devdocs.io/redis/ft.sugadd/index

```
FT.SUGADD
```

```
FT.SUGADD key string score 
  [INCR] 
  [PAYLOAD payload]
```

Add a suggestion string to an auto-complete suggestion dictionary

Examples

## Required arguments

is suggestion dictionary key.

is suggestion string to index.

is floating point number of the suggestion string's weight.

The auto-complete suggestion dictionary is disconnected from the index definitions and leaves creating and updating suggestions dictionaries to the user.

## Optional arguments

increments the existing entry of the suggestion by the given score, instead of replacing the score. This is useful for updating the dictionary based on user queries in real time.

saves an extra payload with the suggestion, that can be fetched by adding the WITHPAYLOADS argument to FT.SUGGET.

## Return

FT.SUGADD returns an integer reply, which is the current size of the suggestion dictionary.

## Examples

```
127.0.0.1:6379> FT.SUGADD sug "hello world" 1
(integer) 3
```

## See also

FT.SUGGET | FT.SUGDEL | FT.SUGLEN

## Related topics

RediSearch

## History

- Starting with Redis version 2.0.0: Deprecated PAYLOAD argument

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.sugadd/
