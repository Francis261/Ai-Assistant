# BRPOPLPUSH

Source: https://devdocs.io/redis/brpoplpush/index

```
BRPOPLPUSH (deprecated)
```

As of Redis version 6.2.0, this command is regarded as deprecated.

It can be replaced by BLMOVE with the RIGHT and LEFT arguments when migrating or writing new code.

```
BRPOPLPUSH source destination timeout
```

BRPOPLPUSH is the blocking variant of RPOPLPUSH. When source contains elements, this command behaves exactly like RPOPLPUSH. When used inside a MULTI/EXEC block, this command behaves exactly like RPOPLPUSH. When source is empty, Redis will block the connection until another client pushes to it or until timeout is reached. A timeout of zero can be used to block indefinitely.

See RPOPLPUSH for more information.

## Return

Bulk string reply: the element being popped from source and pushed to destination. If timeout is reached, a Null reply is returned.

## Pattern: Reliable queue

Please see the pattern description in the RPOPLPUSH documentation.

## Pattern: Circular list

Please see the pattern description in the RPOPLPUSH documentation.

## History

- Starting with Redis version 6.0.0: timeout is interpreted as a double instead of an integer.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/brpoplpush/
