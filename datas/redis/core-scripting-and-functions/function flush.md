# FUNCTION

Source: https://devdocs.io/redis/function-flush/index

```
FUNCTION FLUSH
```

```
FUNCTION FLUSH [ASYNC | SYNC]
```

Deletes all the libraries.

Unless called with the optional mode argument, the lazyfree-lazy-user-flush configuration directive sets the effective behavior. Valid modes are:

- ASYNC: Asynchronously flush the libraries.
- SYNC: Synchronously flush the libraries.

For more information please refer to Introduction to Redis Functions.

## Return

Simple string reply

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/function-flush/
