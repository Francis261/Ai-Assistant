# MEMORY

Source: https://devdocs.io/redis/memory-purge/index

```
MEMORY PURGE
```

```
MEMORY PURGE
```

The MEMORY PURGE command attempts to purge dirty pages so these can be reclaimed by the allocator.

This command is currently implemented only when using jemalloc as an allocator, and evaluates to a benign NOOP for all others.

## Return

Simple string reply

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/memory-purge/
