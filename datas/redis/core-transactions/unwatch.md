# UNWATCH

Source: https://devdocs.io/redis/unwatch/index

```
UNWATCH
```

```
UNWATCH
```

Flushes all the previously watched keys for a transaction.

If you call EXEC or DISCARD, there's no need to manually call UNWATCH.

## Return

Simple string reply: always OK.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/unwatch/
