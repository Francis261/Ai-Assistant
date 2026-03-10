# CLIENT

Source: https://devdocs.io/redis/client-getredir/index

```
CLIENT GETREDIR
```

```
CLIENT GETREDIR
```

This command returns the client ID we are redirecting our tracking notifications to. We set a client to redirect to when using CLIENT TRACKING to enable tracking. However in order to avoid forcing client libraries implementations to remember the ID notifications are redirected to, this command exists in order to improve introspection and allow clients to check later if redirection is active and towards which client ID.

## Return

Integer reply: the ID of the client we are redirecting the notifications to. The command returns -1 if client tracking is not enabled, or 0 if client tracking is enabled but we are not redirecting the notifications to any client.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/client-getredir/
