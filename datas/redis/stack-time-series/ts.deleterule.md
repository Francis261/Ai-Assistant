# TS.DELETERULE

Source: https://devdocs.io/redis/ts.deleterule/index

```
TS.DELETERULE
```

```
TS.DELETERULE sourceKey destKey
```

Delete a compaction rule

## Required arguments

is key name for the source time series.

is key name for destination (compacted) time series.

Note: This command does not delete the compacted series.

## Return value

Simple string reply - OK if executed correctly, or Error reply otherwise.

## See also

TS.CREATERULE

## Related topics

RedisTimeSeries

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ts.deleterule/
