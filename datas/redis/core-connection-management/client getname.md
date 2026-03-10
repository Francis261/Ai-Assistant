# CLIENT

Source: https://devdocs.io/redis/client-getname/index

```
CLIENT GETNAME
```

```
CLIENT GETNAME
```

The CLIENT GETNAME returns the name of the current connection as set by CLIENT SETNAME. Since every new connection starts without an associated name, if no name was assigned a null bulk reply is returned.

## Return

Bulk string reply: The connection name, or a null bulk reply if no name is set.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/client-getname/
