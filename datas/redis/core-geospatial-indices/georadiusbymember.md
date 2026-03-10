# GEORADIUSBYMEMBER

Source: https://devdocs.io/redis/georadiusbymember/index

```
GEORADIUSBYMEMBER (deprecated)
```

As of Redis version 6.2.0, this command is regarded as deprecated.

It can be replaced by GEOSEARCH and GEOSEARCHSTORE with the BYRADIUS and FROMMEMBER arguments when migrating or writing new code.

```
GEORADIUSBYMEMBER key member radius <M | KM | FT | MI> [WITHCOORD]
  [WITHDIST] [WITHHASH] [COUNT count [ANY]] [ASC | DESC] [STORE key]
  [STOREDIST key]
```

This command is exactly like GEORADIUS with the sole difference that instead of taking, as the center of the area to query, a longitude and latitude value, it takes the name of a member already existing inside the geospatial index represented by the sorted set.

The position of the specified member is used as the center of the query.

Please check the example below and the GEORADIUS documentation for more information about the command and its options.

Note that GEORADIUSBYMEMBER_RO is also available since Redis 3.2.10 and Redis 4.0.0 in order to provide a read-only command that can be used in replicas. See the GEORADIUS page for more information.

## Examples

```
GEOADD Sicily 13.583333 37.316667 "Agrigento"
GEOADD Sicily 13.361389 38.115556 "Palermo" 15.087269 37.502669 "Catania"
GEORADIUSBYMEMBER Sicily Agrigento 100 km
```

## History

- Starting with Redis version 7.0.0: Added support for uppercase unit names.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/georadiusbymember/
