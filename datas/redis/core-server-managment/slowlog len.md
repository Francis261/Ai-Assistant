# SLOWLOG

Source: https://devdocs.io/redis/slowlog-len/index

```
SLOWLOG LEN
```

```
SLOWLOG LEN
```

This command returns the current number of entries in the slow log.

A new entry is added to the slow log whenever a command exceeds the execution time threshold defined by the slowlog-log-slower-than configuration directive. The maximum number of entries in the slow log is governed by the slowlog-max-len configuration directive. Once the slog log reaches its maximal size, the oldest entry is removed whenever a new entry is created. The slow log can be cleared with the SLOWLOG RESET command.

@reply

Integer reply

The number of entries in the slow log.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/slowlog-len/
