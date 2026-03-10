# EVALSHA

Source: https://devdocs.io/redis/evalsha/index

```
EVALSHA
```

```
EVALSHA sha1 numkeys [key [key ...]] [arg [arg ...]]
```

Evaluate a script from the server's cache by its SHA1 digest.

The server caches scripts by using the SCRIPT LOAD command. The command is otherwise identical to EVAL.

Please refer to the Redis Programmability and Introduction to Eval Scripts for more information about Lua scripts.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/evalsha/
