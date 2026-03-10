# TS.REVRANGE

Source: https://devdocs.io/redis/ts.revrange/index

```
TS.REVRANGE
```

```
TS.REVRANGE key fromTimestamp toTimestamp
  [LATEST]
  [FILTER_BY_TS TS...]
  [FILTER_BY_VALUE min max]
  [COUNT count]
  [[ALIGN align] AGGREGATION aggregator bucketDuration [BUCKETTIMESTAMP bt] [EMPTY]]
```

Query a range in reverse direction

Examples

## Required arguments

is the key name for the time series.

is start timestamp for the range query (integer UNIX timestamp in milliseconds) or - to denote the timestamp of the earliest sample in the time series.

is end timestamp for the range query (integer UNIX timestamp in milliseconds) or + to denote the timestamp of the latest sample in the time series.

Note: When the time series is a compaction, the last compacted value may aggregate raw values with timestamp beyond toTimestamp. That is because toTimestamp limits only the timestamp of the compacted value, which is the start time of the raw bucket that was compacted.

## Optional arguments

is used when a time series is a compaction. With LATEST, TS.REVRANGE also reports the compacted value of the latest, possibly partial, bucket, given that this bucket's start time falls within [fromTimestamp, toTimestamp]. Without LATEST, TS.REVRANGE does not report the latest, possibly partial, bucket. When a time series is not a compaction, LATEST is ignored.

The data in the latest bucket of a compaction is possibly partial. A bucket is closed and compacted only upon arrival of a new sample that opens a new latest bucket. There are cases, however, when the compacted value of the latest, possibly partial, bucket is also required. In such a case, use LATEST.

filters samples by a list of specific timestamps. A sample passes the filter if its exact timestamp is specified and falls within [fromTimestamp, toTimestamp].

filters samples by minimum and maximum values.

is a time bucket alignment control for AGGREGATION. It controls the time bucket timestamps by changing the reference timestamp on which a bucket is defined. Values include:

- start or -: The reference timestamp will be the query start interval time (fromTimestamp) which can't be -
- end or +: The reference timestamp will be the query end interval time (toTimestamp) which can't be +
- A specific timestamp: align the reference timestamp to a specific time

NOTE: When not provided, alignment is set to 0.

- aggregator takes one of the following aggregation types: aggregator Description avg Arithmetic mean of all values sum Sum of all values min Minimum value max Maximum value range Difference between the maximum and the minimum value count Number of values first Value with lowest timestamp in the bucket last Value with highest timestamp in the bucket std.p Population standard deviation of the values std.s Sample standard deviation of the values var.p Population variance of the values var.s Sample variance of the values twa Time-weighted average over the bucket's timeframe (since RedisTimeSeries v1.8)
- bucketDuration is duration of each bucket, in milliseconds.

aggregator takes one of the following aggregation types:

bucketDuration is duration of each bucket, in milliseconds.

Without ALIGN, bucket start times are multiples of bucketDuration.

With ALIGN align, bucket start times are multiples of bucketDuration with remainder align % bucketDuration.

The first bucket start time is less than or equal to fromTimestamp.

controls how bucket timestamps are reported.

Regardless of the values of fromTimestamp and toTimestamp, no data is reported for buckets that end before the earliest sample or begin after the latest sample in the time series.

## Return value

- Array reply of (Integer reply, Simple string reply) pairs representing (timestamp, value(double))
- Error reply (e.g., on invalid filter value)

## Complexity

TS.REVRANGE complexity can be improved in the future by using binary search to find the start of the range, which makes this O(Log(n/m)+k*m). But, because m is small, you can disregard it and look at the operation as O(Log(n)+k).

## Examples

Consider a metric where acceptable values are between -100 and 100, and the value 9999 is used as an indication of bad measurement.

```
127.0.0.1:6379> TS.CREATE temp:TLV LABELS type temp location TLV
OK
127.0.0.1:6379> TS.MADD temp:TLV 1000 30 temp:TLV 1010 35 temp:TLV 1020 9999 temp:TLV 1030 40
1) (integer) 1000
2) (integer) 1010
3) (integer) 1020
4) (integer) 1030
```

Now, retrieve all values except out-of-range values.

```
TS.REVRANGE temp:TLV - + FILTER_BY_VALUE -100 100
1) 1) (integer) 1030
   2) 40
2) 1) (integer) 1010
   2) 35
3) 1) (integer) 1000
   2) 30
```

Now, retrieve the average value, while ignoring out-of-range values.

```
TS.REVRANGE temp:TLV - + FILTER_BY_VALUE -100 100 AGGREGATION avg 1000
1) 1) (integer) 1000
   2) 35
```

To demonstrate alignment, let’s create a stock and add prices at three different timestamps.

```
127.0.0.1:6379> TS.CREATE stock:A LABELS type stock name A
OK
127.0.0.1:6379> TS.MADD stock:A 1000 100 stock:A 1010 110 stock:A 1020 120
1) (integer) 1000
2) (integer) 1010
3) (integer) 1020
127.0.0.1:6379> TS.MADD stock:A 2000 200 stock:A 2010 210 stock:A 2020 220
1) (integer) 2000
2) (integer) 2010
3) (integer) 2020
127.0.0.1:6379> TS.MADD stock:A 3000 300 stock:A 3010 310 stock:A 3020 320
1) (integer) 3000
2) (integer) 3010
3) (integer) 3020
```

Next, aggregate without using ALIGN, defaulting to alignment 0.

```
127.0.0.1:6379> TS.REVRANGE stock:A - + AGGREGATION min 20
1) 1) (integer) 3020
   2) 320
2) 1) (integer) 3000
   2) 300
3) 1) (integer) 2020
   2) 220
4) 1) (integer) 2000
   2) 200
5) 1) (integer) 1020
   2) 120
6) 1) (integer) 1000
   2) 100
```

And now set ALIGN to 10 to have a bucket start at time 10, and align all the buckets with a 20 milliseconds duration.

```
127.0.0.1:6379> TS.REVRANGE stock:A - + ALIGN 10 AGGREGATION min 20
1) 1) (integer) 3010
   2) 310
2) 1) (integer) 2990
   2) 300
3) 1) (integer) 2010
   2) 210
4) 1) (integer) 1990
   2) 200
5) 1) (integer) 1010
   2) 110
6) 1) (integer) 990
   2) 100
```

When the start timestamp for the range query is explicitly stated (not -), you can set ALIGN to that time by setting align to - or to start.

```
127.0.0.1:6379> TS.REVRANGE stock:A 5 + ALIGN - AGGREGATION min 20
1) 1) (integer) 3005
   2) 310
2) 1) (integer) 2985
   2) 300
3) 1) (integer) 2005
   2) 210
4) 1) (integer) 1985
   2) 200
5) 1) (integer) 1005
   2) 110
6) 1) (integer) 985
   2) 100
```

Similarly, when the end timestamp for the range query is explicitly stated, you can set ALIGN to that time by setting align to + or to end.

## See also

TS.RANGE | TS.MRANGE | TS.MREVRANGE

## Related topics

RedisTimeSeries

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ts.revrange/
