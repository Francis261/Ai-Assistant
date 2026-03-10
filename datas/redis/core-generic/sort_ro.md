# SORT_RO

Source: https://devdocs.io/redis/sort_ro/index

```
SORT_RO
```

```
SORT_RO key [BY pattern] [LIMIT offset count] [GET pattern [GET
  pattern ...]] [ASC | DESC] [ALPHA]
```

Read-only variant of the SORT command. It is exactly like the original SORT but refuses the STORE option and can safely be used in read-only replicas.

Since the original SORT has a STORE option it is technically flagged as a writing command in the Redis command table. For this reason read-only replicas in a Redis Cluster will redirect it to the master instance even if the connection is in read-only mode (see the READONLY command of Redis Cluster).

The SORT_RO variant was introduced in order to allow SORT behavior in read-only replicas without breaking compatibility on command flags.

See original SORT for more details.

## Examples

```
SORT_RO mylist BY weight_*->fieldname GET object_*->fieldname
```

## Return

Array reply: a list of sorted elements.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/sort_ro/
