# PUBSUB

Source: https://devdocs.io/redis/pubsub-channels/index

```
PUBSUB CHANNELS
```

```
PUBSUB CHANNELS [pattern]
```

Lists the currently active channels.

An active channel is a Pub/Sub channel with one or more subscribers (excluding clients subscribed to patterns).

If no pattern is specified, all the channels are listed, otherwise if pattern is specified only channels matching the specified glob-style pattern are listed.

Cluster note: in a Redis Cluster clients can subscribe to every node, and can also publish to every other node. The cluster will make sure that published messages are forwarded as needed. That said, PUBSUB's replies in a cluster only report information from the node's Pub/Sub context, rather than the entire cluster.

## Return

Array reply: a list of active channels, optionally matching the specified pattern.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/pubsub-channels/
