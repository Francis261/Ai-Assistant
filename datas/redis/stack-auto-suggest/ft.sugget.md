# FT.SUGGET

Source: https://devdocs.io/redis/ft.sugget/index

```
FT.SUGGET
```

```
FT.SUGGET key prefix 
  [FUZZY] 
  [WITHSCORES] 
  [WITHPAYLOADS] 
  [MAX max]
```

Get completion suggestions for a prefix

## Syntax

Examples

## Required arguments

is suggestion dictionary key.

is prefix to complete on.

## Optional arguments

performs a fuzzy prefix search, including prefixes at Levenshtein distance of 1 from the prefix sent.

limits the results to a maximum of num (default: 5).

also returns the score of each suggestion. This can be used to merge results from multiple instances.

returns optional payloads saved along with the suggestions. If no payload is present for an entry, it returns a null reply.

## Return

FT.SUGGET returns an array reply, which is a list of the top suggestions matching the prefix, optionally with score after each entry.

## Examples

```
127.0.0.1:6379> FT.SUGGET sug hell FUZZY MAX 3 WITHSCORES
1) "hell"
2) "2147483648"
3) "hello"
4) "0.70710676908493042"
```

## See also

FT.SUGADD | FT.SUGDEL | FT.SUGLEN

## Related topics

RediSearch

## History

- Starting with Redis version 2.0.0: Deprecated WITHPAYLOADS argument

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.sugget/
