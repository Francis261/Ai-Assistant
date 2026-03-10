# TDIGEST.CREATE

Source: https://devdocs.io/redis/tdigest.create/index

```
TDIGEST.CREATE
```

```
TDIGEST.CREATE key [COMPRESSION compression]
```

Allocates memory and initializes a new t-digest sketch.

## Required arguments

## Optional arguments

is a controllable tradeoff between accuracy and memory consumption. 100 is a common value for normal uses. 1000 is more accurate. If no value is passed by default the compression will be 100. For more information on scaling of accuracy versus the compression parameter see The t-digest: Efficient estimates of distributions.

## Return value

Simple string reply - OK if executed correctly, or Error reply otherwise.

## Examples

```
redis> TDIGEST.CREATE t COMPRESSION 100
OK
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/tdigest.create/
