# TDIGEST.BYRANK

Source: https://devdocs.io/redis/tdigest.byrank/index

```
TDIGEST.BYRANK
```

```
TDIGEST.BYRANK key rank [rank ...]
```

Returns, for each input rank, an estimation of the value (floating-point) with that rank.

Multiple estimations can be retrieved in a signle call.

## Required arguments

Rank, for which the value should be retrieved.

0 is the rank of the value of the smallest observation.

n-1 is the rank of the value of the largest observation; n denotes the number of observations added to the sketch.

## Return value

Array reply - an array of floating-points populated with value_1, value_2, ..., value_R:

- Return an accurate result when rank is 0 (the value of the smallest observation)
- Return an accurate result when rank is n-1 (the value of the largest observation), where n denotes the number of observations added to the sketch.
- Return 'inf' when rank is equal to n or larger than n

All values are 'nan' if the sketch is empty.

## Examples

```
redis> TDIGEST.CREATE t COMPRESSION 1000
OK
redis> TDIGEST.ADD t 1 2 2 3 3 3 4 4 4 4 5 5 5 5 5
OK
redis> TDIGEST.BYRANK t 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
 1) "1"
 2) "2"
 3) "2"
 4) "3"
 5) "3"
 6) "3"
 7) "4"
 8) "4"
 9) "4"
10) "4"
11) "5"
12) "5"
13) "5"
14) "5"
15) "5"
16) "inf"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.byrank/
