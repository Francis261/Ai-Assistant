# EXEC

Source: https://devdocs.io/redis/exec/index

```
EXEC
```

```
EXEC
```

Executes all previously queued commands in a transaction and restores the connection state to normal.

When using WATCH, EXEC will execute commands only if the watched keys were not modified, allowing for a check-and-set mechanism.

## Return

Array reply: each element being the reply to each of the commands in the atomic transaction.

When using WATCH, EXEC can return a Null reply if the execution was aborted.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/exec/
