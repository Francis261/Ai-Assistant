# PING

Source: https://devdocs.io/redis/ping/index

```
PING
```

```
PING [message]
```

Returns PONG if no argument is provided, otherwise return a copy of the argument as a bulk. This command is useful for:

1. Testing whether a connection is still alive.
2. Verifying the server's ability to serve data - an error is returned when this isn't the case (e.g., during load from persistence or accessing a stale replica).
3. Measuring latency.

If the client is subscribed to a channel or a pattern, it will instead return a multi-bulk with a "pong" in the first position and an empty bulk in the second position, unless an argument is provided in which case it returns a copy of the argument.

## Return

Simple string reply, and specifically PONG, when no argument is provided.

Bulk string reply the argument provided, when applicable.

## Examples

```
PING
PING "hello world"
```

PING "hello world"

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ping/
