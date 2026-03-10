# EVALSHA_RO

Source: https://devdocs.io/redis/evalsha_ro/index

```
EVALSHA_RO
```

```
EVALSHA_RO sha1 numkeys [key [key ...]] [arg [arg ...]]
```

This is a read-only variant of the EVALSHA command that cannot execute commands that modify data.

For more information about when to use this command vs EVALSHA, please refer to Read-only scripts.

For more information about EVALSHA scripts please refer to Introduction to Eval Scripts.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/evalsha_ro/
