# PUBSUB

Source: https://devdocs.io/redis/pubsub-numsub/index

```
PUBSUB NUMSUB
```

```
PUBSUB NUMSUB [channel [channel ...]]
```

Returns the number of subscribers (exclusive of clients subscribed to patterns) for the specified channels.

Note that it is valid to call this command without channels. In this case it will just return an empty list.

Cluster note: in a Redis Cluster clients can subscribe to every node, and can also publish to every other node. The cluster will make sure that published messages are forwarded as needed. That said, PUBSUB's replies in a cluster only report information from the node's Pub/Sub context, rather than the entire cluster.

## Return

Array reply: a list of channels and number of subscribers for every channel.

The format is channel, count, channel, count, ..., so the list is flat. The order in which the channels are listed is the same as the order of the channels specified in the command call.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/pubsub-numsub/
