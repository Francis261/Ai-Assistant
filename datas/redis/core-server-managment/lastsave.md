# LASTSAVE

Source: https://devdocs.io/redis/lastsave/index

```
LASTSAVE
```

```
LASTSAVE
```

Return the UNIX TIME of the last DB save executed with success. A client may check if a BGSAVE command succeeded reading the LASTSAVE value, then issuing a BGSAVE command and checking at regular intervals every N seconds if LASTSAVE changed. Redis considers the database saved successfully at startup.

## Return

Integer reply: an UNIX time stamp.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/lastsave/
