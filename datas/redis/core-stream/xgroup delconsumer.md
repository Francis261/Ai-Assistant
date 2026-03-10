# XGROUP

Source: https://devdocs.io/redis/xgroup-delconsumer/index

```
XGROUP DELCONSUMER
```

```
XGROUP DELCONSUMER key group consumer
```

The XGROUP DELCONSUMER command deletes a consumer from the consumer group.

Sometimes it may be useful to remove old consumers since they are no longer used.

Note, however, that any pending messages that the consumer had will become unclaimable after it was deleted. It is strongly recommended, therefore, that any pending messages are claimed or acknowledged prior to deleting the consumer from the group.

## Return

Integer reply: the number of pending messages that the consumer had before it was deleted

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/xgroup-delconsumer/
