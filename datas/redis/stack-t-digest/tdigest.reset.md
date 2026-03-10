# TDIGEST.RESET

Source: https://devdocs.io/redis/tdigest.reset/index

```
TDIGEST.RESET
```

```
TDIGEST.RESET key
```

Resets a t-digest sketch: empty the sketch and re-initializes it.

## Required arguments

## Return value

Simple string reply - OK if executed correctly, or Error reply otherwise.

## Examples

```
redis> TDIGEST.RESET t
OK
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.reset/
