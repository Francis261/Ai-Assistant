# TDIGEST.RANK

Source: https://devdocs.io/redis/tdigest.rank/index

```
TDIGEST.RANK
```

```
TDIGEST.RANK key value [value ...]
```

Returns, for each input value (floating-point), the estimated rank of the value (the number of observations in the sketch that are smaller than the value + half the number of observations that are equal to the value).

Multiple ranks can be retrieved in a signle call.

## Required arguments

## Return value

Array reply - an array of integers populated with rank_1, rank_2, ..., rank_V:

- -1 - when value is smaller than the value of the smallest observation.
- The number of observations - when value is larger than the value of the largest observation.
- Otherwise: an estimation of the number of (observations smaller than value + half the observations equal to value).

0 is the rank of the value of the smallest observation.

n-1 is the rank of the value of the largest observation; n denotes the number of observations added to the sketch.

All values are -2 if the sketch is empty.

## Examples

```
redis> TDIGEST.CREATE s COMPRESSION 1000
OK
redis> TDIGEST.ADD s 10 20 30 40 50 60
OK
redis> TDIGEST.RANK s 0 10 20 30 40 50 60 70
1) (integer) -1
2) (integer) 0
3) (integer) 1
4) (integer) 2
5) (integer) 3
6) (integer) 4
7) (integer) 5
8) (integer) 6
redis> TDIGEST.REVRANK s 0 10 20 30 40 50 60 70
1) (integer) 6
2) (integer) 5
3) (integer) 4
4) (integer) 3
5) (integer) 2
6) (integer) 1
7) (integer) 0
8) (integer) -1  
```

```
redis> TDIGEST.CREATE s COMPRESSION 1000
OK
redis> TDIGEST.ADD s 10 10 10 10 20 20
OK
redis> TDIGEST.RANK s 10 20
1) (integer) 2
2) (integer) 5
redis> TDIGEST.REVRANK s 10 20
1) (integer) 4
2) (integer) 1
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.rank/
