# RESTORE-ASKING

Source: https://devdocs.io/redis/restore-asking/index

```
RESTORE-ASKING
```

```
RESTORE-ASKING key ttl serialized-value [REPLACE] [ABSTTL]
  [IDLETIME seconds] [FREQ frequency]
```

The RESTORE-ASKING command is an internal command. It is used by a Redis cluster master during slot migration.

## History

- Starting with Redis version 3.0.0: Added the REPLACE modifier.
- Starting with Redis version 5.0.0: Added the ABSTTL modifier.
- Starting with Redis version 5.0.0: Added the IDLETIME and FREQ options.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/restore-asking/
