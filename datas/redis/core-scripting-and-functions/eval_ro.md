# EVAL_RO

Source: https://devdocs.io/redis/eval_ro/index

```
EVAL_RO
```

```
EVAL_RO script numkeys [key [key ...]] [arg [arg ...]]
```

This is a read-only variant of the EVAL command that cannot execute commands that modify data.

For more information about when to use this command vs EVAL, please refer to Read-only scripts.

For more information about EVAL scripts please refer to Introduction to Eval Scripts.

## Examples

```
> SET mykey "Hello"
OK

> EVAL_RO "return redis.call('GET', KEYS[1])" 1 mykey
"Hello"

> EVAL_RO "return redis.call('DEL', KEYS[1])" 1 mykey
(error) ERR Error running script (call to b0d697da25b13e49157b2c214a4033546aba2104): @user_script:1: @user_script: 1: Write commands are not allowed from read-only scripts.
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/eval_ro/
