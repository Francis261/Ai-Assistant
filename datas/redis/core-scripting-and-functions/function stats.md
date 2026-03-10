# FUNCTION

Source: https://devdocs.io/redis/function-stats/index

```
FUNCTION STATS
```

```
FUNCTION STATS
```

Return information about the function that's currently running and information about the available execution engines.

The reply is map with two keys:

1. running_script: information about the running script. If there's no in-flight function, the server replies with a nil. Otherwise, this is a map with the following keys:

- name: the name of the function.
- command: the command and arguments used for invoking the function.
- duration_ms: the function's runtime duration in milliseconds.

1. engines: this is a map of maps. Each entry in the map represent a single engine. Engine map contains statistics about the engine like number of functions and number of libraries.

You can use this command to inspect the invocation of a long-running function and decide whether kill it with the FUNCTION KILL command.

For more information please refer to Introduction to Redis Functions.

## Return

Array reply

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/function-stats/
