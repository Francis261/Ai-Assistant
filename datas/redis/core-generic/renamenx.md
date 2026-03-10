# RENAMENX

Source: https://devdocs.io/redis/renamenx/index

```
RENAMENX
```

```
RENAMENX key newkey
```

Renames key to newkey if newkey does not yet exist. It returns an error when key does not exist.

In Cluster mode, both key and newkey must be in the same hash slot, meaning that in practice only keys that have the same hash tag can be reliably renamed in cluster.

## Return

Integer reply, specifically:

- 1 if key was renamed to newkey.
- 0 if newkey already exists.

## Examples

```
SET mykey "Hello"
SET myotherkey "World"
RENAMENX mykey myotherkey
GET myotherkey
```

## History

- Starting with Redis version 3.2.0: The command no longer returns an error when source and destination names are the same.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/renamenx/
