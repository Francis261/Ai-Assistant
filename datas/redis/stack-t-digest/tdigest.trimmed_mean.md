# TDIGEST.TRIMMED_MEAN

Source: https://devdocs.io/redis/tdigest.trimmed_mean/index

```
TDIGEST.TRIMMED_MEAN
```

```
TDIGEST.TRIMMED_MEAN key low_cut_quantile high_cut_quantile
```

Returns an estimation of the mean value from the sketch, excluding observation values outside the low and high cutoff quantiles.

## Required arguments

Foating-point value in the range [0..1], should be lower than high_cut_quantile

When equal to 0: No low cut.

When higher than 0: Exclude observation values lower than this quantile.

Floating-point value in the range [0..1], should be higher than low_cut_quantile

When lower than 1: Exclude observation values higher than or equal to this quantile.

When equal to 1: No high cut.

## Return value

Simple string reply estimation of the mean value. 'nan' if the sketch is empty.

## Examples

```
redis> TDIGEST.CREATE t COMPRESSION 1000
OK
redis> TDIGEST.ADD t 1 2 3 4 5 6 7 8 9 10
OK
redis> TDIGEST.TRIMMED_MEAN t 0.1 0.6
"4"
redis> TDIGEST.TRIMMED_MEAN t 0.3 0.9
"6.5"
redis> TDIGEST.TRIMMED_MEAN t 0 1
"5.5"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.trimmed_mean/
