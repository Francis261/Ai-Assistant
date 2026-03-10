# PFMERGE

Source: https://devdocs.io/redis/pfmerge/index

```
PFMERGE
```

```
PFMERGE destkey [sourcekey [sourcekey ...]]
```

Merge multiple HyperLogLog values into a unique value that will approximate the cardinality of the union of the observed Sets of the source HyperLogLog structures.

The computed merged HyperLogLog is set to the destination variable, which is created if does not exist (defaulting to an empty HyperLogLog).

If the destination variable exists, it is treated as one of the source sets and its cardinality will be included in the cardinality of the computed HyperLogLog.

## Return

Simple string reply: The command just returns OK.

## Examples

```
PFADD hll1 foo bar zap a
PFADD hll2 a b c foo
PFMERGE hll3 hll1 hll2
PFCOUNT hll3
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/pfmerge/
