# CONFIG

Source: https://devdocs.io/redis/config-resetstat/index

```
CONFIG RESETSTAT
```

```
CONFIG RESETSTAT
```

Resets the statistics reported by Redis using the INFO and LATENCY HISTOGRAM commands.

The following is a non-exhaustive list of values that are reset:

- Keyspace hits and misses
- Number of expired keys
- Command and error statistics
- Connections received, rejected and evicted
- Persistence statistics
- Active defragmentation statistics

## Return

Simple string reply: always OK.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/config-resetstat/
