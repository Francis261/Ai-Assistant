# TDIGEST.INFO

Source: https://devdocs.io/redis/tdigest.info/index

```
TDIGEST.INFO
```

```
TDIGEST.INFO key
```

Returns information and statistics about a t-digest sketch.

## Required arguments

is key name for an existing t-digest sketch.

## Return value

Array reply with information about the sketch:

## Examples

```
redis> TDIGEST.CREATE t
OK
redis> TDIGEST.ADD t 1 2 3 4 5
OK
redis> TDIGEST.INFO t
 1) Compression
 2) (integer) 100
 3) Capacity
 4) (integer) 610
 5) Merged nodes
 6) (integer) 0
 7) Unmerged nodes
 8) (integer) 5
 9) Merged weight
10) (integer) 0
11) Unmerged weight
12) (integer) 5
13) Observations
14) (integer) 5
15) Total compressions
16) (integer) 0
17) Memory usage
18) (integer) 9768
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.info/
