# GETDEL

Source: https://devdocs.io/redis/getdel/index

```
GETDEL
```

```
GETDEL key
```

Get the value of key and delete the key. This command is similar to GET, except for the fact that it also deletes the key on success (if and only if the key's value type is a string).

## Return

Bulk string reply: the value of key, nil when key does not exist, or an error if the key's value type isn't a string.

## Examples

```
SET mykey "Hello"
GETDEL mykey
GET mykey
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/getdel/
