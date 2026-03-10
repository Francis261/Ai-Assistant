# ZREVRANK

Source: https://devdocs.io/redis/zrevrank/index

```
ZREVRANK
```

```
ZREVRANK key member [WITHSCORE]
```

Returns the rank of member in the sorted set stored at key, with the scores ordered from high to low. The rank (or index) is 0-based, which means that the member with the highest score has rank 0.

The optional WITHSCORE argument supplements the command's reply with the score of the element returned.

Use ZRANK to get the rank of an element with the scores ordered from low to high.

## Return

- If member exists in the sorted set:
  - using WITHSCORE, Array reply: an array containing the rank and score of member.
  - without using WITHSCORE, Integer reply: the rank of member.
- If member does not exist in the sorted set or key does not exist:
  - using WITHSCORE, Array reply: nil.
  - without using WITHSCORE, Bulk string reply: nil.

- using WITHSCORE, Array reply: an array containing the rank and score of member.
- without using WITHSCORE, Integer reply: the rank of member.

- using WITHSCORE, Array reply: nil.
- without using WITHSCORE, Bulk string reply: nil.

Note that in RESP3 null and nullarray are the same, but in RESP2 they are not.

## Examples

```
ZADD myzset 1 "one"
ZADD myzset 2 "two"
ZADD myzset 3 "three"
ZREVRANK myzset "one"
ZREVRANK myzset "four"
ZREVRANK myzset "three" WITHSCORE
ZREVRANK myzset "four" WITHSCORE
```

## History

- Starting with Redis version 7.2.0: Added the optional WITHSCORE argument.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/zrevrank/
