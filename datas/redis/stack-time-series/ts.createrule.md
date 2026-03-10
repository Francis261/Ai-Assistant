# TS.CREATERULE

Source: https://devdocs.io/redis/ts.createrule/index

```
TS.CREATERULE
```

```
TS.CREATERULE sourceKey destKey 
  AGGREGATION aggregator bucketDuration 
  [alignTimestamp]
```

Create a compaction rule

Examples

## Required arguments

is key name for the source time series.

is key name for destination (compacted) time series. It must be created before TS.CREATERULE is called.

aggregates results into time buckets.

- aggregator takes one of the following aggregation types: aggregator Description avg Arithmetic mean of all values sum Sum of all values min Minimum value max Maximum value range Difference between the highest and the lowest value count Number of values first Value with lowest timestamp in the bucket last Value with highest timestamp in the bucket std.p Population standard deviation of the values std.s Sample standard deviation of the values var.p Population variance of the values var.s Sample variance of the values twa Time-weighted average over the bucket's timeframe (since RedisTimeSeries v1.8)
- bucketDuration is duration of each bucket, in milliseconds.

aggregator takes one of the following aggregation types:

bucketDuration is duration of each bucket, in milliseconds.

Notes

- Only new samples that are added into the source series after the creation of the rule will be aggregated.
- Calling TS.CREATERULE with a nonempty destKey may result in inconsistencies between the raw and the compacted data.
- Explicitly adding samples to a compacted time series (using TS.ADD, TS.MADD, TS.INCRBY, or TS.DECRBY) may result in inconsistencies between the raw and the compacted data. The compaction process may override such samples.
- If no samples are added to the source time series during a bucket period. no compacted sample is added to the destination time series.
- The timestamp of a compacted sample added to the destination time series is set to the start timestamp the appropriate compaction bucket. For example, for a 10-minute compaction bucket with no alignment, the compacted samples timestamps are x:00, x:10, x:20, and so on.
- Deleting destKey will cause the compaction rule to be deleted as well.
- On a clustered environment, hash tags should be used to force sourceKey and destKey to be stored in the same hash slot.

## Optional arguments

ensures that there is a bucket that starts exactly at alignTimestamp and aligns all other buckets accordingly. It is expressed in milliseconds. The default value is 0 aligned with the epoch. For example, if bucketDuration is 24 hours (24 * 3600 * 1000), setting alignTimestamp to 6 hours after the epoch (6 * 3600 * 1000) ensures that each bucket’s timeframe is [06:00 .. 06:00).

## Return value

Simple string reply - OK if executed correctly, or Error reply otherwise.

## Examples

Create a time series to store the temperatures measured in Tel Aviv.

```
127.0.0.1:6379> TS.CREATE temp:TLV LABELS type temp location TLV
OK
```

Next, create a compacted time series named dailyAvgTemp containing one compacted sample per 24 hours: the time-weighted average of all measurements taken from midnight to next midnight.

```
127.0.0.1:6379> TS.CREATE dailyAvgTemp:TLV LABELS type temp location TLV
127.0.0.1:6379> TS.CREATERULE temp:TLV dailyAvgTemp:TLV AGGREGATION twa 86400000 
```

Now, also create a compacted time series named dailyDiffTemp. This time series will contain one compacted sample per 24 hours: the difference between the minimum and the maximum temperature measured between 06:00 and 06:00 next day. Here, 86400000 is the number of milliseconds in 24 hours, 21600000 is the number of milliseconds in 6 hours.

```
127.0.0.1:6379> TS.CREATE dailyDiffTemp:TLV LABELS type temp location TLV
127.0.0.1:6379> TS.CREATERULE temp:TLV dailyDiffTemp:TLV AGGREGATION range 86400000 21600000
```

## See also

TS.DELETERULE

## Related topics

RedisTimeSeries

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ts.createrule/
