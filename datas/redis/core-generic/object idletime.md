# OBJECT

Source: https://devdocs.io/redis/object-idletime/index

```
OBJECT IDLETIME
```

```
OBJECT IDLETIME key
```

This command returns the time in seconds since the last access to the value stored at <key>.

The command is only available when the maxmemory-policy configuration directive is not set to one of the LFU policies.

## Return

Integer reply

The idle time in seconds.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/object-idletime/
