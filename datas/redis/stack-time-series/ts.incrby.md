# TS.INCRBY

Source: https://devdocs.io/redis/ts.incrby/index

```
TS.INCRBY
```

```
TS.INCRBY key value 
  [TIMESTAMP timestamp] 
  [RETENTION retentionPeriod] 
  [UNCOMPRESSED] 
  [CHUNK_SIZE size] 
  [LABELS {label value}...]
```

Increase the value of the sample with the maximum existing timestamp, or create a new sample with a value equal to the value of the sample with the maximum existing timestamp with a given increment

Examples

## Required arguments

is key name for the time series.

is numeric data value of the sample (double)

Notes

- When specified key does not exist, a new time series is created.
- You can use this command as a counter or gauge that automatically gets history as a time series.
- Explicitly adding samples to a compacted time series (using TS.ADD, TS.MADD, TS.INCRBY, or TS.DECRBY) may result in inconsistencies between the raw and the compacted data. The compaction process may override such samples.

## Optional arguments

is (integer) UNIX sample timestamp in milliseconds or * to set the timestamp according to the server clock.

timestamp must be equal to or higher than the maximum existing timestamp. When equal, the value of the sample with the maximum existing timestamp is increased. If it is higher, a new sample with a timestamp set to timestamp is created, and its value is set to the value of the sample with the maximum existing timestamp plus value.

If the time series is empty, the value is set to value.

When not specified, the timestamp is set according to the server clock.

is maximum retention period, compared to the maximum existing timestamp, in milliseconds. Use it only if you are creating a new time series. It is ignored if you are adding samples to an existing time series. See RETENTION in TS.CREATE.

changes data storage from compressed (default) to uncompressed. Use it only if you are creating a new time series. It is ignored if you are adding samples to an existing time series. See ENCODING in TS.CREATE.

is memory size, in bytes, allocated for each data chunk. Use it only if you are creating a new time series. It is ignored if you are adding samples to an existing time series. See CHUNK_SIZE in TS.CREATE.

is set of label-value pairs that represent metadata labels of the key and serve as a secondary index. Use it only if you are creating a new time series. It is ignored if you are adding samples to an existing time series. See LABELS in TS.CREATE.

Notes

- You can use this command to add data to a nonexisting time series in a single command. This is why RETENTION, UNCOMPRESSED, CHUNK_SIZE, and LABELS are optional arguments.
- When specified and the key doesn't exist, a new time series is created. Setting the RETENTION and LABELS introduces additional time complexity.

## Return value

Integer reply - the timestamp of the upserted sample, or Error reply.

## Examples

Suppose you are getting number of orders or total income per minute from several points of sale, and you want to store only the combined value. Call TS.INCRBY for each point-of-sale report.

```
127.0.0.1:6379> TS.INCRBY a 232 TIMESTAMP 1657811829000		// point-of-sale #1
(integer) 1657811829000
127.0.0.1:6379> TS.INCRBY a 157 TIMESTAMP 1657811829000		// point-of-sale #2
(integer) 1657811829000
127.0.0.1:6379> TS.INCRBY a 432 TIMESTAMP 1657811829000		// point-of-sale #3
(integer) 1657811829000
```

Note that the timestamps must arrive in non-decreasing order.

```
127.0.0.1:6379> ts.incrby a 100 TIMESTAMP 50
(error) TSDB: timestamp must be equal to or higher than the maximum existing timestamp
```

You can achieve similar results without such protection using TS.ADD key timestamp value ON_DUPLICATE sum.

Supose a sensor ticks whenever a car is passed on a road, and you want to count occurrences. Whenever you get a tick from the sensor you can simply call:

```
127.0.0.1:6379> TS.INCRBY a 1
(integer) 1658431553109
```

The timestamp is filled automatically.

## See also

TS.DECRBY | TS.CREATE

## Related topics

RedisTimeSeries

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ts.incrby/
