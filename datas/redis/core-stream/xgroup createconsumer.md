# XGROUP

Source: https://devdocs.io/redis/xgroup-createconsumer/index

```
XGROUP CREATECONSUMER
```

```
XGROUP CREATECONSUMER key group consumer
```

Create a consumer named <consumername> in the consumer group <groupname> of the stream that's stored at <key>.

Consumers are also created automatically whenever an operation, such as XREADGROUP, references a consumer that doesn't exist. This is valid for XREADGROUP only when there is data in the stream.

## Return

Integer reply: the number of created consumers (0 or 1)

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/xgroup-createconsumer/
