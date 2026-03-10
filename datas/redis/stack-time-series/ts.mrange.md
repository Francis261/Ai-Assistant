# TS.MRANGE

Source: https://devdocs.io/redis/ts.mrange/index

```
TS.MRANGE
```

```
TS.MRANGE fromTimestamp toTimestamp
  [LATEST]
  [FILTER_BY_TS ts...]
  [FILTER_BY_VALUE min max]
  [WITHLABELS | SELECTED_LABELS label...]
  [COUNT count]
  [[ALIGN align] AGGREGATION aggregator bucketDuration [BUCKETTIMESTAMP bt] [EMPTY]]
  FILTER filterExpr...
  [GROUPBY label REDUCE reducer]
```

Query a range across multiple time series by filters in forward direction

Examples

## Required arguments

is start timestamp for the range query (integer UNIX timestamp in milliseconds) or - to denote the timestamp of the earliest sample amongs all time series that passes FILTER filterExpr....

is end timestamp for the range query (integer UNIX timestamp in milliseconds) or + to denote the timestamp of the latest sample amongs all time series that passes FILTER filterExpr....

filters time series based on their labels and label values. Each filter expression has one of the following syntaxes:

- label=value, where label equals value
- label!=value, where label does not equal value
- label=, where key does not have label label
- label!=, where key has label label
- label=(value1,value2,...), where key with label label equals one of the values in the list
- label!=(value1,value2,...), where key with label label does not equal any of the values in the list

Notes:

- At least one label=value filter is required.
- Filters are conjunctive. For example, the FILTER type=temperature room=study means the a time series is a temperature time series of a study room.
- Don't use whitespaces in the filter expression.

## Optional arguments

is used when a time series is a compaction. With LATEST, TS.MRANGE also reports the compacted value of the latest possibly partial bucket, given that this bucket's start time falls within [fromTimestamp, toTimestamp]. Without LATEST, TS.MRANGE does not report the latest possibly partial bucket. When a time series is not a compaction, LATEST is ignored.

The data in the latest bucket of a compaction is possibly partial. A bucket is closed and compacted only upon arrival of a new sample that opens a new latest bucket. There are cases, however, when the compacted value of the latest possibly partial bucket is also required. In such a case, use LATEST.

filters samples by a list of specific timestamps. A sample passes the filter if its exact timestamp is specified and falls within [fromTimestamp, toTimestamp].

filters samples by minimum and maximum values.

includes in the reply all label-value pairs representing metadata labels of the time series. If WITHLABELS or SELECTED_LABELS are not specified, by default, an empty list is reported as label-value pairs.

returns a subset of the label-value pairs that represent metadata labels of the time series. Use when a large number of labels exists per series, but only the values of some of the labels are required. If WITHLABELS or SELECTED_LABELS are not specified, by default, an empty list is reported as label-value pairs.

limits the number of returned samples.

is a time bucket alignment control for AGGREGATION. It controls the time bucket timestamps by changing the reference timestamp on which a bucket is defined.

Values include:

- start or -: The reference timestamp will be the query start interval time (fromTimestamp) which can't be -
- end or +: The reference timestamp will be the query end interval time (toTimestamp) which can't be +
- A specific timestamp: align the reference timestamp to a specific time

Note: When not provided, alignment is set to 0.

per time series, aggregates samples into time buckets, where:

- aggregator takes one of the following aggregation types: aggregator Description avg Arithmetic mean of all values sum Sum of all values min Minimum value max Maximum value range Difference between maximum value and minimum value count Number of values first Value with lowest timestamp in the bucket last Value with highest timestamp in the bucket std.p Population standard deviation of the values std.s Sample standard deviation of the values var.p Population variance of the values var.s Sample variance of the values twa Time-weighted average over the bucket's timeframe (since RedisTimeSeries v1.8)
- bucketDuration is duration of each bucket, in milliseconds.

aggregator takes one of the following aggregation types:

bucketDuration is duration of each bucket, in milliseconds.

Without ALIGN, bucket start times are multiples of bucketDuration.

With ALIGN align, bucket start times are multiples of bucketDuration with remainder align % bucketDuration.

The first bucket start time is less than or equal to fromTimestamp.

controls how bucket timestamps are reported.

is a flag, which, when specified, reports aggregations also for empty buckets.

Regardless of the values of fromTimestamp and toTimestamp, no data is reported for buckets that end before the earliest sample or begin after the latest sample in the time series.

splits time series into groups, each group contains time series that share the same value for the provided label name, then aggregates results in each group.

When combined with AGGREGATION the GROUPBY/REDUCE is applied post aggregation stage.

- label is label name. A group is created for all time series that share the same value for this label.
- reducer is an aggregation type used to aggregate the results in each group. reducer Description avg Arithmetic mean of all non-NaN values (since RedisTimeSeries v1.8) sum Sum of all non-NaN values min Minimum non-NaN value max Maximum non-NaN value range Difference between maximum non-NaN value and minimum non-NaN value (since RedisTimeSeries v1.8) count Number of non-NaN values (since RedisTimeSeries v1.8) std.p Population standard deviation of all non-NaN values (since RedisTimeSeries v1.8) std.s Sample standard deviation of all non-NaN values (since RedisTimeSeries v1.8) var.p Population variance of all non-NaN values (since RedisTimeSeries v1.8) var.s Sample variance of all non-NaN values (since RedisTimeSeries v1.8)

label is label name. A group is created for all time series that share the same value for this label.

reducer is an aggregation type used to aggregate the results in each group.

Notes:

- The produced time series is named <label>=<value>
- The produced time series contains two labels with these label array structures:
  - __reducer__, the reducer used (e.g., "count")
  - __source__, the list of time series keys used to compute the grouped series (e.g., "key1,key2,key3")

- __reducer__, the reducer used (e.g., "count")
- __source__, the list of time series keys used to compute the grouped series (e.g., "key1,key2,key3")

Note: An MRANGE command cannot be part of a transaction when running on a Redis cluster.

## Return value

If GROUPBY label REDUCE reducer is not specified:

- Array reply: for each time series matching the specified filters, the following is reported:
  - bulk-string-reply: The time series key name
  - Array reply: label-value pairs (Bulk string reply, Bulk string reply)
    - By default, an empty array is reported
    - If WITHLABELS is specified, all labels associated with this time series are reported
    - If SELECTED_LABELS label... is specified, the selected labels are reported (null value when no such label defined)
  - Array reply: timestamp-value pairs (Integer reply, Simple string reply (double)): all samples/aggregations matching the range

- bulk-string-reply: The time series key name
- Array reply: label-value pairs (Bulk string reply, Bulk string reply)
  - By default, an empty array is reported
  - If WITHLABELS is specified, all labels associated with this time series are reported
  - If SELECTED_LABELS label... is specified, the selected labels are reported (null value when no such label defined)
- Array reply: timestamp-value pairs (Integer reply, Simple string reply (double)): all samples/aggregations matching the range

- By default, an empty array is reported
- If WITHLABELS is specified, all labels associated with this time series are reported
- If SELECTED_LABELS label... is specified, the selected labels are reported (null value when no such label defined)

If GROUPBY label REDUCE reducer is specified:

- Array reply: for each group of time series matching the specified filters, the following is reported:
  - bulk-string-reply with the format label=value where label is the GROUPBY label argument
  - Array reply: label-value pairs (Bulk string reply, Bulk string reply):
    - By default, an empty array is reported
    - If WITHLABELS is specified, the GROUPBY label argument and value are reported
    - If SELECTED_LABELS label... is specified, the selected labels are reported (null value when no such label defined or label does not have the same value for all grouped time series)
  - Array reply: either a single pair (Bulk string reply, Bulk string reply): the GROUPBY label argument and value, or empty array if
  - Array reply: a single pair (Bulk string reply, Bulk string reply): the string __reducer__ and the reducer argument
  - Array reply: a single pair (Bulk string reply, Bulk string reply): the string __source__ and the time series key names separated by ,
  - Array reply: timestamp-value pairs (Integer reply, Simple string reply (double)): all samples/aggregations matching the range

- bulk-string-reply with the format label=value where label is the GROUPBY label argument
- Array reply: label-value pairs (Bulk string reply, Bulk string reply):
  - By default, an empty array is reported
  - If WITHLABELS is specified, the GROUPBY label argument and value are reported
  - If SELECTED_LABELS label... is specified, the selected labels are reported (null value when no such label defined or label does not have the same value for all grouped time series)
- Array reply: either a single pair (Bulk string reply, Bulk string reply): the GROUPBY label argument and value, or empty array if
- Array reply: a single pair (Bulk string reply, Bulk string reply): the string __reducer__ and the reducer argument
- Array reply: a single pair (Bulk string reply, Bulk string reply): the string __source__ and the time series key names separated by ,
- Array reply: timestamp-value pairs (Integer reply, Simple string reply (double)): all samples/aggregations matching the range

- By default, an empty array is reported
- If WITHLABELS is specified, the GROUPBY label argument and value are reported
- If SELECTED_LABELS label... is specified, the selected labels are reported (null value when no such label defined or label does not have the same value for all grouped time series)

## Examples

Create two stocks and add their prices at three different timestamps.

```
127.0.0.1:6379> TS.CREATE stock:A LABELS type stock name A
OK
127.0.0.1:6379> TS.CREATE stock:B LABELS type stock name B
OK
127.0.0.1:6379> TS.MADD stock:A 1000 100 stock:A 1010 110 stock:A 1020 120
1) (integer) 1000
2) (integer) 1010
3) (integer) 1020
127.0.0.1:6379> TS.MADD stock:B 1000 120 stock:B 1010 110 stock:B 1020 100
1) (integer) 1000
2) (integer) 1010
3) (integer) 1020
```

You can now retrieve the maximum stock price per timestamp.

```
127.0.0.1:6379> TS.MRANGE - + WITHLABELS FILTER type=stock GROUPBY type REDUCE max
1) 1) "type=stock"
   2) 1) 1) "type"
         2) "stock"
      2) 1) "__reducer__"
         2) "max"
      3) 1) "__source__"
         2) "stock:A,stock:B"
   3) 1) 1) (integer) 1000
         2) 120
      2) 1) (integer) 1010
         2) 110
      3) 1) (integer) 1020
         2) 120
```

The FILTER type=stock clause returns a single time series representing stock prices. The GROUPBY type REDUCE max clause splits the time series into groups with identical type values, and then, for each timestamp, aggregates all series that share the same type value using the max aggregator.

Create two stocks and add their prices at nine different timestamps.

```
127.0.0.1:6379> TS.CREATE stock:A LABELS type stock name A
OK
127.0.0.1:6379> TS.CREATE stock:B LABELS type stock name B
OK
127.0.0.1:6379> TS.MADD stock:A 1000 100 stock:A 1010 110 stock:A 1020 120
1) (integer) 1000
2) (integer) 1010
3) (integer) 1020
127.0.0.1:6379> TS.MADD stock:B 1000 120 stock:B 1010 110 stock:B 1020 100
1) (integer) 1000
2) (integer) 1010
3) (integer) 1020
127.0.0.1:6379> TS.MADD stock:A 2000 200 stock:A 2010 210 stock:A 2020 220
1) (integer) 2000
2) (integer) 2010
3) (integer) 2020
127.0.0.1:6379> TS.MADD stock:B 2000 220 stock:B 2010 210 stock:B 2020 200
1) (integer) 2000
2) (integer) 2010
3) (integer) 2020
127.0.0.1:6379> TS.MADD stock:A 3000 300 stock:A 3010 310 stock:A 3020 320
1) (integer) 3000
2) (integer) 3010
3) (integer) 3020
127.0.0.1:6379> TS.MADD stock:B 3000 320 stock:B 3010 310 stock:B 3020 300
1) (integer) 3000
2) (integer) 3010
3) (integer) 3020
```

Now, for each stock, calculate the average stock price per a 1000-millisecond timeframe, and then retrieve the stock with the maximum average for that timeframe.

```
127.0.0.1:6379> TS.MRANGE - + WITHLABELS AGGREGATION avg 1000 FILTER type=stock GROUPBY type REDUCE max
1) 1) "type=stock"
   2) 1) 1) "type"
         2) "stock"
      2) 1) "__reducer__"
         2) "max"
      3) 1) "__source__"
         2) "stock:A,stock:B"
   3) 1) 1) (integer) 1000
         2) 110
      2) 1) (integer) 2000
         2) 210
      3) 1) (integer) 3000
         2) 310
```

Query all time series with the metric label equal to cpu, then group the time series by the value of their metric_name label value and for each group return the maximum value and the time series keys (source) with that value.

```
127.0.0.1:6379> TS.ADD ts1 1548149180000 90 labels metric cpu metric_name system
(integer) 1548149180000
127.0.0.1:6379> TS.ADD ts1 1548149185000 45
(integer) 1548149185000
127.0.0.1:6379> TS.ADD ts2 1548149180000 99 labels metric cpu metric_name user
(integer) 1548149180000
127.0.0.1:6379> TS.MRANGE - + WITHLABELS FILTER metric=cpu GROUPBY metric_name REDUCE max
1) 1) "metric_name=system"
   2) 1) 1) "metric_name"
         2) "system"
      2) 1) "__reducer__"
         2) "max"
      3) 1) "__source__"
         2) "ts1"
   3) 1) 1) (integer) 1548149180000
         2) 90
      2) 1) (integer) 1548149185000
         2) 45
2) 1) "metric_name=user"
   2) 1) 1) "metric_name"
         2) "user"
      2) 1) "__reducer__"
         2) "max"
      3) 1) "__source__"
         2) "ts2"
   3) 1) 1) (integer) 1548149180000
         2) 99
```

Query all time series with the metric label equal to cpu, then filter values larger or equal to 90.0 and smaller or equal to 100.0.

```
127.0.0.1:6379> TS.ADD ts1 1548149180000 90 labels metric cpu metric_name system
(integer) 1548149180000
127.0.0.1:6379> TS.ADD ts1 1548149185000 45
(integer) 1548149185000
127.0.0.1:6379> TS.ADD ts2 1548149180000 99 labels metric cpu metric_name user
(integer) 1548149180000
127.0.0.1:6379> TS.MRANGE - + FILTER_BY_VALUE 90 100 WITHLABELS FILTER metric=cpu
1) 1) "ts1"
   2) 1) 1) "metric"
         2) "cpu"
      2) 1) "metric_name"
         2) "system"
   3) 1) 1) (integer) 1548149180000
         2) 90
2) 1) "ts2"
   2) 1) 1) "metric"
         2) "cpu"
      2) 1) "metric_name"
         2) "user"
   3) 1) 1) (integer) 1548149180000
         2) 99
```

Query all time series with the metric label equal to cpu, but only return the team label.

```
127.0.0.1:6379> TS.ADD ts1 1548149180000 90 labels metric cpu metric_name system team NY
(integer) 1548149180000
127.0.0.1:6379> TS.ADD ts1 1548149185000 45
(integer) 1548149185000
127.0.0.1:6379> TS.ADD ts2 1548149180000 99 labels metric cpu metric_name user team SF
(integer) 1548149180000
127.0.0.1:6379> TS.MRANGE - + SELECTED_LABELS team FILTER metric=cpu
1) 1) "ts1"
   2) 1) 1) "team"
         2) "NY"
   3) 1) 1) (integer) 1548149180000
         2) 90
      2) 1) (integer) 1548149185000
         2) 45
2) 1) "ts2"
   2) 1) 1) "team"
         2) "SF"
   3) 1) 1) (integer) 1548149180000
         2) 99
```

## See also

TS.RANGE | TS.MREVRANGE | TS.REVRANGE

## Related topics

RedisTimeSeries

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ts.mrange/
