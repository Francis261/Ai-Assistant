# DISCARD

Source: https://devdocs.io/redis/discard/index

```
DISCARD
```

```
DISCARD
```

Flushes all previously queued commands in a transaction and restores the connection state to normal.

If WATCH was used, DISCARD unwatches all keys watched by the connection.

## Return

Simple string reply: always OK.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/discard/
