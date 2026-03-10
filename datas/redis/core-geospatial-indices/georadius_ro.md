# GEORADIUS_RO

Source: https://devdocs.io/redis/georadius_ro/index

```
GEORADIUS_RO (deprecated)
```

As of Redis version 6.2.0, this command is regarded as deprecated.

It can be replaced by GEOSEARCH with the BYRADIUS argument when migrating or writing new code.

```
GEORADIUS_RO key longitude latitude radius <M | KM | FT | MI>
  [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count [ANY]] [ASC | DESC]
```

Read-only variant of the GEORADIUS command.

This command is identical to the GEORADIUS command, except that it doesn't support the optional STORE and STOREDIST parameters.

## Return

Array reply: An array with each entry being the corresponding result of the subcommand given at the same position.

## History

- Starting with Redis version 6.2.0: Added the ANY option for COUNT.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/georadius_ro/
