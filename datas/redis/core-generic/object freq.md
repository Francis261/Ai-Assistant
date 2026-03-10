# OBJECT

Source: https://devdocs.io/redis/object-freq/index

```
OBJECT FREQ
```

```
OBJECT FREQ key
```

This command returns the logarithmic access frequency counter of a Redis object stored at <key>.

The command is only available when the maxmemory-policy configuration directive is set to one of the LFU policies.

## Return

Integer reply

The counter's value.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/object-freq/
