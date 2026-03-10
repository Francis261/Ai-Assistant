# BF.CARD

Source: https://devdocs.io/redis/bf.card/index

```
BF.CARD
```

```
BF.CARD key
```

Returns the cardinality of a Bloom filter - number of items that were added to a Bloom filter and detected as unique (items that caused at least one bit to be set in at least one sub-filter)

(since RedisBloom 2.4.4)

### Parameters

- key: The name of the filter

## Return

- Integer reply - the number of items that were added to this Bloom filter and detected as unique (items that caused at least one bit to be set in at least one sub-filter).
- 0 when key does not exist.
- Error when key is of a type other than Bloom filter.

Note: when key exists - return the same value as BF.INFO key ITEMS.

## Examples

```
redis> BF.ADD bf1 item_foo
(integer) 1
redis> BF.CARD bf1
(integer) 1
redis> BF.CARD bf_new
(integer) 0
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/bf.card/
