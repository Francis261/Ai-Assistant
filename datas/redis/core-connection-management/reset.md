# RESET

Source: https://devdocs.io/redis/reset/index

```
RESET
```

```
RESET
```

This command performs a full reset of the connection's server-side context, mimicking the effect of disconnecting and reconnecting again.

When the command is called from a regular client connection, it does the following:

- Discards the current MULTI transaction block, if one exists.
- Unwatches all keys WATCHed by the connection.
- Disables CLIENT TRACKING, if in use.
- Sets the connection to READWRITE mode.
- Cancels the connection's ASKING mode, if previously set.
- Sets CLIENT REPLY to ON.
- Sets the protocol version to RESP2.
- SELECTs database 0.
- Exits MONITOR mode, when applicable.
- Aborts Pub/Sub's subscription state (SUBSCRIBE and PSUBSCRIBE), when appropriate.
- Deauthenticates the connection, requiring a call AUTH to reauthenticate when authentication is enabled.
- Turns off NO-EVICT mode.
- Turns off NO-TOUCH mode.

## Return

Simple string reply: always 'RESET'.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/reset/
