# QUIT

Source: https://devdocs.io/redis/quit/index

```
QUIT (deprecated)
```

As of Redis version 7.2.0, this command is regarded as deprecated.

It can be replaced by just closing the connection when migrating or writing new code.

```
QUIT
```

Ask the server to close the connection. The connection is closed as soon as all pending replies have been written to the client.

Note: Clients should not use this command. Instead, clients should simply close the connection when they're not used anymore. Terminating a connection on the client side is preferable, as it eliminates TIME_WAIT lingering sockets on the server side.

## Return

Simple string reply: always OK.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/quit/
