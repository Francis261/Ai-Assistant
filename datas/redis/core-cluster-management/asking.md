# ASKING

Source: https://devdocs.io/redis/asking/index

```
ASKING
```

```
ASKING
```

When a cluster client receives an -ASK redirect, the ASKING command is sent to the target node followed by the command which was redirected. This is normally done automatically by cluster clients.

If an -ASK redirect is received during a transaction, only one ASKING command needs to be sent to the target node before sending the complete transaction to the target node.

See ASK redirection in the Redis Cluster Specification for details.

## Return

Simple string reply: OK.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/asking/
