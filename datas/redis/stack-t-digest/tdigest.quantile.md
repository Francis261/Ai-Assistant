# TDIGEST.QUANTILE

Source: https://devdocs.io/redis/tdigest.quantile/index

```
TDIGEST.QUANTILE
```

```
TDIGEST.QUANTILE key quantile [quantile ...]
```

Returns, for each input fraction, an estimation of the value (floating point) that is smaller than the given fraction of observations.

Multiple quantiles can be retrieved in a signle call.

## Required arguments

## Return value

Array reply - an array of estimates (floating-point) populated with value_1, value_2, ..., value_N.

- Return an accurate result when quantile is 0 (the value of the smallest observation)
- Return an accurate result when quantile is 1 (the value of the largest observation)

All values are 'nan' if the sketch is empty.

## Examples

```
redis> TDIGEST.CREATE t COMPRESSION 1000
OK
redis> TDIGEST.ADD t 1 2 2 3 3 3 4 4 4 4 5 5 5 5 5
OK
redis> TDIGEST.QUANTILE t 0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1
 1) "1"
 2) "2"
 3) "3"
 4) "3"
 5) "4"
 6) "4"
 7) "4"
 8) "5"
 9) "5"
10) "5"
11) "5"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.quantile/
