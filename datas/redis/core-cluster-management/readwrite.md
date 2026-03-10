# READWRITE

Source: https://devdocs.io/redis/readwrite/index

```
READWRITE
```

```
READWRITE
```

Disables read queries for a connection to a Redis Cluster replica node.

Read queries against a Redis Cluster replica node are disabled by default, but you can use the READONLY command to change this behavior on a per- connection basis. The READWRITE command resets the readonly mode flag of a connection back to readwrite.

## Return

Simple string reply

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/readwrite/
