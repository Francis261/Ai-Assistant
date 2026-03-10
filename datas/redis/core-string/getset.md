# GETSET

Source: https://devdocs.io/redis/getset/index

```
GETSET (deprecated)
```

As of Redis version 6.2.0, this command is regarded as deprecated.

It can be replaced by SET with the GET argument when migrating or writing new code.

```
GETSET key value
```

Atomically sets key to value and returns the old value stored at key. Returns an error when key exists but does not hold a string value. Any previous time to live associated with the key is discarded on successful SET operation.

## Design pattern

GETSET can be used together with INCR for counting with atomic reset. For example: a process may call INCR against the key mycounter every time some event occurs, but from time to time we need to get the value of the counter and reset it to zero atomically. This can be done using GETSET mycounter "0":

```
INCR mycounter
GETSET mycounter "0"
GET mycounter
```

## Return

Bulk string reply: the old value stored at key, or nil when key did not exist.

## Examples

```
SET mykey "Hello"
GETSET mykey "World"
GET mykey
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/getset/
