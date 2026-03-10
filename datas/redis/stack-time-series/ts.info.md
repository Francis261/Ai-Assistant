# TS.INFO

Source: https://devdocs.io/redis/ts.info/index

```
TS.INFO
```

```
TS.INFO key 
  [DEBUG]
```

Return information and statistics for a time series.

Examples

## Required arguments

## Optional arguments

is an optional flag to get a more detailed information about the chunks.

## Return value

Array reply with information about the time series (name-value pairs):

When DEBUG is specified, the response also contains:

## Examples

Create a set of sensors to measure temperature and humidity in your study and kitchen.

```
127.0.0.1:6379> TS.CREATE telemetry:study:temperature LABELS room study type temperature
OK
127.0.0.1:6379> TS.CREATE telemetry:study:humidity LABELS room study type humidity
OK
127.0.0.1:6379> TS.CREATE telemetry:kitchen:temperature LABELS room kitchen type temperature
OK
127.0.0.1:6379> TS.CREATE telemetry:kitchen:humidity LABELS room kitchen type humidity
OK
```

Find information about the time series for temperature in the kitchen.

```
127.0.0.1:6379> TS.INFO telemetry:kitchen:temperature
 1) totalSamples
 2) (integer) 0
 3) memoryUsage
 4) (integer) 4246
 5) firstTimestamp
 6) (integer) 0
 7) lastTimestamp
 8) (integer) 0
 9) retentionTime
10) (integer) 0
11) chunkCount
12) (integer) 1
13) chunkSize
14) (integer) 4096
15) chunkType
16) compressed
17) duplicatePolicy
18) (nil)
19) labels
20) 1) 1) "room"
       2) "kitchen"
    2) 1) "type"
       2) "temperature"
21) sourceKey
22) (nil)
23) rules
24) (empty array)
```

Query the time series using DEBUG to get more information about the chunks.

```
127.0.0.1:6379> TS.INFO telemetry:kitchen:temperature DEBUG
 1) totalSamples
 2) (integer) 0
 3) memoryUsage
 4) (integer) 4246
 5) firstTimestamp
 6) (integer) 0
 7) lastTimestamp
 8) (integer) 0
 9) retentionTime
10) (integer) 0
11) chunkCount
12) (integer) 1
13) chunkSize
14) (integer) 4096
15) chunkType
16) compressed
17) duplicatePolicy
18) (nil)
19) labels
20) 1) 1) "room"
       2) "kitchen"
    2) 1) "type"
       2) "temperature"
21) sourceKey
22) (nil)
23) rules
24) (empty array)
25) keySelfName
26) "telemetry:kitchen:temperature"
27) Chunks
28) 1)  1) startTimestamp
        2) (integer) 0
        3) endTimestamp
        4) (integer) 0
        5) samples
        6) (integer) 0
        7) size
        8) (integer) 4096
        9) bytesPerSample
       10) "inf"
```

## See also

TS.RANGE | TS.QUERYINDEX | TS.GET

## Related topics

RedisTimeSeries

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ts.info/
