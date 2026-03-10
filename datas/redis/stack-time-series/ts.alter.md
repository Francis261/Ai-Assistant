# TS.ALTER

Source: https://devdocs.io/redis/ts.alter/index

```
TS.ALTER
```

```
TS.ALTER key 
  [RETENTION retentionPeriod] 
  [CHUNK_SIZE size] 
  [DUPLICATE_POLICY policy] 
  [LABELS [{label value}...]]
```

Update the retention, chunk size, duplicate policy, and labels of an existing time series

Examples

## Required arguments

is key name for the time series.

Note: This command alters only the specified element. For example, if you specify only RETENTION and LABELS, the chunk size and the duplicate policy are not altered.

## Optional arguments

is maximum retention period, compared to the maximum existing timestamp, in milliseconds. See RETENTION in TS.CREATE.

is the initial allocation size, in bytes, for the data part of each new chunk. Actual chunks may consume more memory. See CHUNK_SIZE in TS.CREATE. Changing this value does not affect existing chunks.

is policy for handling multiple samples with identical timestamps. See DUPLICATE_POLICY in TS.CREATE.

is set of label-value pairs that represent metadata labels of the key and serve as a secondary index.

If LABELS is specified, the given label list is applied. Labels that are not present in the given list are removed implicitly. Specifying LABELS with no label-value pairs removes all existing labels. See LABELS in TS.CREATE.

## Return value

Simple string reply - OK if executed correctly, or Error reply otherwise.

## Examples

Create a temperature time series.

```
127.0.0.1:6379> TS.CREATE temperature:2:32 RETENTION 60000 DUPLICATE_POLICY MAX LABELS sensor_id 2 area_id 32
OK
```

Alter the labels in the time series.

```
127.0.0.1:6379> TS.ALTER temperature:2:32 LABELS sensor_id 2 area_id 32 sub_area_id 15
OK
```

## See also

TS.CREATE

## Related topics

RedisTimeSeries

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ts.alter/
