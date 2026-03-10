# TS.GET

Source: https://devdocs.io/redis/ts.get/index

```
TS.GET
```

```
TS.GET key 
  [LATEST]
```

Get the sample with the highest timestamp from a given time series

Examples

## Required arguments

is key name for the time series.

## Optional arguments

is used when a time series is a compaction. With LATEST, TS.GET reports the compacted value of the latest, possibly partial, bucket. Without LATEST, TS.GET does not report the latest, possibly partial, bucket. When a time series is not a compaction, LATEST is ignored.

The data in the latest bucket of a compaction is possibly partial. A bucket is closed and compacted only upon arrival of a new sample that opens a new latest bucket. There are cases, however, when the compacted value of the latest, possibly partial, bucket is also required. In such a case, use LATEST.

## Return value

One of:

- Array reply of a single (Integer reply, Simple string reply) pair representing (timestamp, value(double)) of the sample with the highest timetamp
- An empty Array reply - when the time series is empty
- Error reply (e.g., when the key does not exist or when the number of arguments is wrong)

## Examples

Create a time series to store the temperatures measured in Tel Aviv and add four measurements for Sun Jan 01 2023

```
127.0.0.1:6379> TS.CREATE temp:TLV LABELS type temp location TLV
OK
127.0.0.1:6379> TS.MADD temp:TLV 1672534800 12 temp:TLV 1672556400 16 temp:TLV 1672578000 21 temp:TLV 1672599600 14
```

Next, get the latest measured temperature (the temperature with the highest timestamp)

```
127.0.0.1:6379> TS.GET temp:TLV
1) (integer) 1672599600
2) 14
```

Create a time series to store the temperatures measured in Jerusalem

```
127.0.0.1:6379> TS.CREATE temp:JLM LABELS type temp location JLM
OK
```

Next, create a compacted time series named dailyAvgTemp:JLM containing one compacted sample per 24 hours: the maximum of all measurements taken from midnight to next midnight.

```
127.0.0.1:6379> TS.CREATE dailyMaxTemp:JLM LABELS type temp location JLM
OK
127.0.0.1:6379> TS.CREATERULE temp:JLM dailyMaxTemp:JLM AGGREGATION max 86400000
OK
```

Add four measurements for Sun Jan 01 2023 and three measurements for Mon Jan 02 2023

```
127.0.0.1:6379> TS.MADD temp:JLM 1672534800000 12 temp:JLM 1672556400000 16 temp:JLM 1672578000000 21 temp:JLM 1672599600000 14
1) (integer) 1672534800000
2) (integer) 1672556400000
3) (integer) 1672578000000
4) (integer) 1672599600000
127.0.0.1:6379> TS.MADD temp:JLM 1672621200000 11 temp:JLM 1672642800000 21 temp:JLM 1672664400000 26
1) (integer) 1672621200000
2) (integer) 1672642800000
3) (integer) 1672664400000
```

Next, get the latest maximum daily temperature; do not report the latest, possibly partial, bucket

```
127.0.0.1:6379> TS.GET dailyMaxTemp:JLM
1) (integer) 1672531200000
2) 21
```

Get the latest maximum daily temperature (the temperature with the highest timestamp); report the latest, possibly partial, bucket

```
127.0.0.1:6379> TS.GET dailyMaxTemp:JLM LATEST
1) (integer) 1672617600000
2) 26
```

## See also

TS.MGET

## Related topics

RedisTimeSeries

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ts.get/
