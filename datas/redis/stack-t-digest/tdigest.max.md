# TDIGEST.MAX

Source: https://devdocs.io/redis/tdigest.max/index

```
TDIGEST.MAX
```

```
TDIGEST.MAX key
```

Returns the maximum observation value from a t-digest sketch.

## Required arguments

## Return value

Simple string reply of maximum observation value from a sketch. The result is always accurate. 'nan' if the sketch is empty.

## Examples

```
redis> TDIGEST.CREATE t
OK
redis> TDIGEST.MAX t
"nan"
redis> TDIGEST.ADD t 3 4 1 2 5
OK
redis>TDIGEST.MAX t
"5"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.max/
