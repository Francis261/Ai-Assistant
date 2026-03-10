# EVAL

Source: https://devdocs.io/redis/eval/index

```
EVAL
```

```
EVAL script numkeys [key [key ...]] [arg [arg ...]]
```

Invoke the execution of a server-side Lua script.

The first argument is the script's source code. Scripts are written in Lua and executed by the embedded Lua 5.1 interpreter in Redis.

The second argument is the number of input key name arguments, followed by all the keys accessed by the script. These names of input keys are available to the script as the KEYS global runtime variable Any additional input arguments should not represent names of keys.

Important: to ensure the correct execution of scripts, both in standalone and clustered deployments, all names of keys that a script accesses must be explicitly provided as input key arguments. The script should only access keys whose names are given as input arguments. Scripts should never access keys with programmatically-generated names or based on the contents of data structures stored in the database.

Please refer to the Redis Programmability and Introduction to Eval Scripts for more information about Lua scripts.

## Examples

The following example will run a script that returns the first argument that it gets.

```
> EVAL "return ARGV[1]" 0 hello
"hello"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/eval/
