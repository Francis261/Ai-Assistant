# PUBLISH

Source: https://devdocs.io/redis/publish/index

```
PUBLISH
```

```
PUBLISH channel message
```

Posts a message to the given channel.

In a Redis Cluster clients can publish to every node. The cluster makes sure that published messages are forwarded as needed, so clients can subscribe to any channel by connecting to any one of the nodes.

## Return

Integer reply: the number of clients that received the message. Note that in a Redis Cluster, only clients that are connected to the same node as the publishing client are included in the count.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/publish/
