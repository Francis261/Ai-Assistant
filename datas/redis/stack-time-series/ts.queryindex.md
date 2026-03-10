# TS.QUERYINDEX

Source: https://devdocs.io/redis/ts.queryindex/index

```
TS.QUERYINDEX
```

```
TS.QUERYINDEX filterExpr...
```

Get all time series keys matching a filter list

Examples

## Required arguments

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

Note: The QUERYINDEX command cannot be part of transaction when running on a Redis cluster.

## Return value

Either

- Array reply where each element is a Bulk string reply: a time series key. The array is empty if no time series matches the filter.
- Error reply (e.g., on invalid filter expression)

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

Retrieve keys of all time series representing sensors located in the kitchen.

```
127.0.0.1:6379> TS.QUERYINDEX room=kitchen
1) "telemetry:kitchen:humidity"
2) "telemetry:kitchen:temperature"
```

To retrieve the keys of all time series representing sensors that measure temperature, use this query:

```
127.0.0.1:6379> TS.QUERYINDEX type=temperature
1) "telemetry:kitchen:temperature"
2) "telemetry:study:temperature"
```

## See also

TS.CREATE | TS.MRANGE | TS.MREVRANGE | TS.MGET

## Related topics

RedisTimeSeries

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ts.queryindex/
