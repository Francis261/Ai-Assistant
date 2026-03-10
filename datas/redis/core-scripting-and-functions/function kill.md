# FUNCTION

Source: https://devdocs.io/redis/function-kill/index

```
FUNCTION KILL
```

```
FUNCTION KILL
```

Kill a function that is currently executing.

The FUNCTION KILL command can be used only on functions that did not modify the dataset during their execution (since stopping a read-only function does not violate the scripting engine's guaranteed atomicity).

For more information please refer to Introduction to Redis Functions.

## Return

Simple string reply

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/function-kill/
