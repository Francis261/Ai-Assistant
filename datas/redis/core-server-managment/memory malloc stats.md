# MEMORY

Source: https://devdocs.io/redis/memory-malloc-stats/index

```
MEMORY MALLOC-STATS
```

```
MEMORY MALLOC-STATS
```

The MEMORY MALLOC-STATS command provides an internal statistics report from the memory allocator.

This command is currently implemented only when using jemalloc as an allocator, and evaluates to a benign NOOP for all others.

## Return

Bulk string reply: the memory allocator's internal statistics report

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/memory-malloc-stats/
