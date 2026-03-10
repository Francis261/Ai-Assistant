# FLUSHALL

Source: https://devdocs.io/redis/flushall/index

```
FLUSHALL
```

```
FLUSHALL [ASYNC | SYNC]
```

Delete all the keys of all the existing databases, not just the currently selected one. This command never fails.

By default, FLUSHALL will synchronously flush all the databases. Starting with Redis 6.2, setting the lazyfree-lazy-user-flush configuration directive to "yes" changes the default flush mode to asynchronous.

It is possible to use one of the following modifiers to dictate the flushing mode explicitly:

- ASYNC: flushes the databases asynchronously
- SYNC: flushes the databases synchronously

Note: an asynchronous FLUSHALL command only deletes keys that were present at the time the command was invoked. Keys created during an asynchronous flush will be unaffected.

## Return

Simple string reply

## Behavior change history

- >= 6.2.0: Default flush behavior now configurable by the lazyfree-lazy-user-flush configuration directive.

## History

- Starting with Redis version 4.0.0: Added the ASYNC flushing mode modifier.
- Starting with Redis version 6.2.0: Added the SYNC flushing mode modifier.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/flushall/
