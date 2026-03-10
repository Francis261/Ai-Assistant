# GEORADIUSBYMEMBER_RO

Source: https://devdocs.io/redis/georadiusbymember_ro/index

```
GEORADIUSBYMEMBER_RO (deprecated)
```

As of Redis version 6.2.0, this command is regarded as deprecated.

It can be replaced by GEOSEARCH with the BYRADIUS and FROMMEMBER arguments when migrating or writing new code.

```
GEORADIUSBYMEMBER_RO key member radius <M | KM | FT | MI>
  [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count [ANY]] [ASC | DESC]
```

Read-only variant of the GEORADIUSBYMEMBER command.

This command is identical to the GEORADIUSBYMEMBER command, except that it doesn't support the optional STORE and STOREDIST parameters.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/georadiusbymember_ro/
