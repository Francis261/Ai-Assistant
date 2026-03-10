# TS.ADD

Source: https://devdocs.io/redis/ts.add/index

```
TS.ADD
```

```
TS.ADD key timestamp value 
  [RETENTION retentionPeriod] 
  [ENCODING [COMPRESSED|UNCOMPRESSED]] 
  [CHUNK_SIZE size] 
  [ON_DUPLICATE policy] 
  [LABELS {label value}...]
```

Append a sample to a time series

Examples

## Required arguments

is key name for the time series.

is (integer) UNIX sample timestamp in milliseconds or * to set the timestamp according to the server clock.

is (double) numeric data value of the sample. The double number should follow RFC 7159 (JSON standard). In particular, the parser rejects overly large values that do not fit in binary64. It does not accept NaN or infinite values.

Notes:

- When specified key does not exist, a new time series is created. if a COMPACTION_POLICY configuration parameter is defined, compacted time series would be created as well.
- If timestamp is older than the retention period compared to the maximum existing timestamp, the sample is discarded and an error is returned.
- When adding a sample to a time series for which compaction rules are defined:
  - If all the original samples for an affected aggregated time bucket are available, the compacted value is recalculated based on the reported sample and the original samples.
  - If only a part of the original samples for an affected aggregated time bucket is available due to trimming caused in accordance with the time series RETENTION policy, the compacted value is recalculated based on the reported sample and the available original samples.
  - If the original samples for an affected aggregated time bucket are not available due to trimming caused in accordance with the time series RETENTION policy, the compacted value bucket is not updated.
- Explicitly adding samples to a compacted time series (using TS.ADD, TS.MADD, TS.INCRBY, or TS.DECRBY) may result in inconsistencies between the raw and the compacted data. The compaction process may override such samples.

When specified key does not exist, a new time series is created.

if a COMPACTION_POLICY configuration parameter is defined, compacted time series would be created as well.

If timestamp is older than the retention period compared to the maximum existing timestamp, the sample is discarded and an error is returned.

When adding a sample to a time series for which compaction rules are defined:

- If all the original samples for an affected aggregated time bucket are available, the compacted value is recalculated based on the reported sample and the original samples.
- If only a part of the original samples for an affected aggregated time bucket is available due to trimming caused in accordance with the time series RETENTION policy, the compacted value is recalculated based on the reported sample and the available original samples.
- If the original samples for an affected aggregated time bucket are not available due to trimming caused in accordance with the time series RETENTION policy, the compacted value bucket is not updated.

Explicitly adding samples to a compacted time series (using TS.ADD, TS.MADD, TS.INCRBY, or TS.DECRBY) may result in inconsistencies between the raw and the compacted data. The compaction process may override such samples.

## Optional arguments

The following arguments are optional because they can be set by TS.CREATE.

is maximum retention period, compared to the maximum existing timestamp, in milliseconds.

Use it only if you are creating a new time series. It is ignored if you are adding samples to an existing time series. See RETENTION in TS.CREATE.

specifies the series sample's encoding format.

Use it only if you are creating a new time series. It is ignored if you are adding samples to an existing time series. See ENCODING in TS.CREATE.

Use it only if you are creating a new time series. It is ignored if you are adding samples to an existing time series. See CHUNK_SIZE in TS.CREATE.

is overwrite key and database configuration for DUPLICATE_POLICY, the policy for handling samples with identical timestamps. It is used with one of the following values:

- BLOCK: ignore any newly reported value and reply with an error
- FIRST: ignore any newly reported value
- LAST: override with the newly reported value
- MIN: only override if the value is lower than the existing value
- MAX: only override if the value is higher than the existing value
- SUM: If a previous sample exists, add the new sample to it so that the updated value is equal to (previous + new). If no previous sample exists, set the updated value equal to the new value.

is set of label-value pairs that represent metadata labels of the time series.

Use it only if you are creating a new time series. It is ignored if you are adding samples to an existing time series. See LABELS in TS.CREATE.

Notes:

- You can use this command to add data to a nonexisting time series in a single command. This is why RETENTION, ENCODING, CHUNK_SIZE, ON_DUPLICATE, and LABELS are optional arguments.
- Setting RETENTION and LABELS introduces additional time complexity.

## Return value

Integer reply - the timestamp of the upserted sample, or Error reply.

## Complexity

If a compaction rule exits on a time series, the performance of TS.ADD can be reduced. The complexity of TS.ADD is always O(M), where M is the number of compaction rules or O(1) with no compaction.

## Examples

Create a temperature time series, set its retention to 1 year, and append a sample.

```
127.0.0.1:6379> TS.ADD temperature:3:11 1548149183000 27 RETENTION 31536000000
(integer) 1548149183000
```

Note: If a time series with such a name already exists, the sample is added, but the retention does not change.

Add a sample to the time series, setting the sample's timestamp according to the server clock.

```
127.0.0.1:6379> TS.ADD temperature:3:11 * 30
(integer) 1662042954573
```

## See also

TS.CREATE

## Related topics

RedisTimeSeries

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ts.add/
