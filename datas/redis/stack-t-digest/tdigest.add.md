# TDIGEST.ADD

Source: https://devdocs.io/redis/tdigest.add/index

```
TDIGEST.ADD
```

```
TDIGEST.ADD key value [value ...]
```

Adds one or more observations to a t-digest sketch.

## Required arguments

## Return value

Simple string reply - OK if executed correctly, or Error reply otherwise.

## Examples

```
redis> TDIGEST.ADD t 1 2 3
OK
```

```
redis> TDIGEST.ADD t string
(error) ERR T-Digest: error parsing val parameter
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.add/
