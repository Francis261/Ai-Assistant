# PUBSUB

Source: https://devdocs.io/redis/pubsub-shardchannels/index

```
PUBSUB SHARDCHANNELS
```

```
PUBSUB SHARDCHANNELS [pattern]
```

Lists the currently active shard channels.

An active shard channel is a Pub/Sub shard channel with one or more subscribers.

If no pattern is specified, all the channels are listed, otherwise if pattern is specified only channels matching the specified glob-style pattern are listed.

The information returned about the active shard channels are at the shard level and not at the cluster level.

## Return

Array reply: a list of active channels, optionally matching the specified pattern.

## Examples

```
> PUBSUB SHARDCHANNELS
1) "orders"
PUBSUB SHARDCHANNELS o*
1) "orders"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/pubsub-shardchannels/
