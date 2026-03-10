# CLUSTER

Source: https://devdocs.io/redis/cluster-bumpepoch/index

```
CLUSTER BUMPEPOCH
```

```
CLUSTER BUMPEPOCH
```

Advances the cluster config epoch.

The CLUSTER BUMPEPOCH command triggers an increment to the cluster's config epoch from the connected node. The epoch will be incremented if the node's config epoch is zero, or if it is less than the cluster's greatest epoch.

Note: config epoch management is performed internally by the cluster, and relies on obtaining a consensus of nodes. The CLUSTER BUMPEPOCH attempts to increment the config epoch WITHOUT getting the consensus, so using it may violate the "last failover wins" rule. Use it with caution.

## Return

Simple string reply: BUMPED if the epoch was incremented, or STILL if the node already has the greatest config epoch in the cluster.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/cluster-bumpepoch/
