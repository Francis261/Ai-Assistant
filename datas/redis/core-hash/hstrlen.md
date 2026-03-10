# HSTRLEN

Source: https://devdocs.io/redis/hstrlen/index

```
HSTRLEN
```

```
HSTRLEN key field
```

Returns the string length of the value associated with field in the hash stored at key. If the key or the field do not exist, 0 is returned.

## Return

Integer reply: the string length of the value associated with field, or zero when field is not present in the hash or key does not exist at all.

## Examples

```
HMSET myhash f1 HelloWorld f2 99 f3 -256
HSTRLEN myhash f1
HSTRLEN myhash f2
HSTRLEN myhash f3
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hstrlen/
