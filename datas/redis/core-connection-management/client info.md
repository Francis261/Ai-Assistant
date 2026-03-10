# CLIENT

Source: https://devdocs.io/redis/client-info/index

```
CLIENT INFO
```

```
CLIENT INFO
```

The command returns information and statistics about the current client connection in a mostly human readable format.

The reply format is identical to that of CLIENT LIST, and the content consists only of information about the current client.

## Examples

```
CLIENT INFO
```

## Return

Bulk string reply: a unique string, as described at the CLIENT LIST page, for the current client.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/client-info/
