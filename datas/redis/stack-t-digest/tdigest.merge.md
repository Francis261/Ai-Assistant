# TDIGEST.MERGE

Source: https://devdocs.io/redis/tdigest.merge/index

```
TDIGEST.MERGE
```

```
TDIGEST.MERGE destination-key numkeys source-key [source-key ...]
  [COMPRESSION compression] [OVERRIDE]
```

Merges multiple t-digest sketches into a single sketch.

## Required arguments

is key name for a t-digest sketch to merge observation values to.

If destination-key does not exist - a new sketch is created.

If destination-key is an existing sketch, its values are merged with the values of the source keys. To override the destination key contents use OVERRIDE.

## Optional arguments

is a controllable tradeoff between accuracy and memory consumption. 100 is a common value for normal uses. 1000 is more accurate. If no value is passed by default the compression will be 100. For more information on scaling of accuracy versus the compression parameter see The t-digest: Efficient estimates of distributions.

When COMPRESSION is not specified:

- If destination-key does not exist or if OVERRIDE is specified, the compression is set to the maximal value among all source sketches.
- If destination-key already exists and OVERRIDE is not specified, its compression is not changed.

## Return value

OK on success, error otherwise.

## Examples

```
redis> TDIGEST.CREATE s1
OK
redis> TDIGEST.CREATE s2
OK
redis> TDIGEST.ADD s1 10.0 20.0
OK
redis> TDIGEST.ADD s2 30.0 40.0
OK
redis> TDIGEST.MERGE sM 2 s1 s2
OK
redis> TDIGEST.BYRANK sM 0 1 2 3 4
1) "10"
2) "20"
3) "30"
4) "40"
5) "inf"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.merge/
