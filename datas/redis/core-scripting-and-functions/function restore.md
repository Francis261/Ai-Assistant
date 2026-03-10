# FUNCTION

Source: https://devdocs.io/redis/function-restore/index

```
FUNCTION RESTORE
```

```
FUNCTION RESTORE serialized-value [FLUSH | APPEND | REPLACE]
```

Restore libraries from the serialized payload.

You can use the optional policy argument to provide a policy for handling existing libraries. The following policies are allowed:

- APPEND: appends the restored libraries to the existing libraries and aborts on collision. This is the default policy.
- FLUSH: deletes all existing libraries before restoring the payload.
- REPLACE: appends the restored libraries to the existing libraries, replacing any existing ones in case of name collisions. Note that this policy doesn't prevent function name collisions, only libraries.

For more information please refer to Introduction to Redis Functions.

## Return

Simple string reply

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/function-restore/
