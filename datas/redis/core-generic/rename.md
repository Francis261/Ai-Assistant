# RENAME

Source: https://devdocs.io/redis/rename/index

```
RENAME
```

```
RENAME key newkey
```

Renames key to newkey. It returns an error when key does not exist. If newkey already exists it is overwritten, when this happens RENAME executes an implicit DEL operation, so if the deleted key contains a very big value it may cause high latency even if RENAME itself is usually a constant-time operation.

In Cluster mode, both key and newkey must be in the same hash slot, meaning that in practice only keys that have the same hash tag can be reliably renamed in cluster.

## Return

Simple string reply

## Examples

```
SET mykey "Hello"
RENAME mykey myotherkey
GET myotherkey
```

## Behavior change history

- >= 3.2.0: The command no longer returns an error when source and destination names are the same.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/rename/
