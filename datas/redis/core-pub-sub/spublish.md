# SPUBLISH

Source: https://devdocs.io/redis/spublish/index

```
SPUBLISH
```

```
SPUBLISH shardchannel message
```

Posts a message to the given shard channel.

In Redis Cluster, shard channels are assigned to slots by the same algorithm used to assign keys to slots. A shard message must be sent to a node that own the slot the shard channel is hashed to. The cluster makes sure that published shard messages are forwarded to all the node in the shard, so clients can subscribe to a shard channel by connecting to any one of the nodes in the shard.

For more information about sharded pubsub, see Sharded Pubsub.

## Return

Integer reply: the number of clients that received the message. Note that in a Redis Cluster, only clients that are connected to the same node as the publishing client are included in the count.

## Examples

For example the following command publish to channel orders with a subscriber already waiting for message(s).

```
> spublish orders hello
(integer) 1
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/spublish/
