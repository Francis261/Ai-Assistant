# CLUSTER

Source: https://devdocs.io/redis/cluster-countkeysinslot/index

```
CLUSTER COUNTKEYSINSLOT
```

```
CLUSTER COUNTKEYSINSLOT slot
```

Returns the number of keys in the specified Redis Cluster hash slot. The command only queries the local data set, so contacting a node that is not serving the specified hash slot will always result in a count of zero being returned.

```
> CLUSTER COUNTKEYSINSLOT 7000
(integer) 50341
```

## Return

Integer reply: The number of keys in the specified hash slot, or an error if the hash slot is invalid.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cluster-countkeysinslot/
