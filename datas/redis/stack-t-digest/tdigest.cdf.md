# TDIGEST.CDF

Source: https://devdocs.io/redis/tdigest.cdf/index

```
TDIGEST.CDF
```

```
TDIGEST.CDF key value [value ...]
```

Returns, for each input value, an estimation of the fraction (floating-point) of (observations smaller than the given value + half the observations equal to the given value).

Multiple fractions can be retrieved in a signle call.

## Required arguments

## Return value

Array reply - the command returns an array of floating-points populated with fraction_1, fraction_2, ..., fraction_N.

All values are 'nan' if the sketch is empty.

## Examples

```
redis> TDIGEST.CREATE t COMPRESSION 1000
OK
redis> TDIGEST.ADD t 1 2 2 3 3 3 4 4 4 4 5 5 5 5 5
OK
redis> TDIGEST.CDF t 0 1 2 3 4 5 6
1) "0"
2) "0.033333333333333333"
3) "0.13333333333333333"
4) "0.29999999999999999"
5) "0.53333333333333333"
6) "0.83333333333333337"
7) "1"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.cdf/
