# PSYNC

Source: https://devdocs.io/redis/psync/index

```
PSYNC
```

```
PSYNC replicationid offset
```

Initiates a replication stream from the master.

The PSYNC command is called by Redis replicas for initiating a replication stream from the master.

For more information about replication in Redis please check the replication page.

## Return

Non standard return value, a bulk transfer of the data followed by PING and write requests from the master.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/psync/
