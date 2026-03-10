# GET

Source: https://devdocs.io/redis/get/index

```
GET
```

```
GET key
```

Get the value of key. If the key does not exist the special value nil is returned. An error is returned if the value stored at key is not a string, because GET only handles string values.

## Return

Bulk string reply: the value of key, or nil when key does not exist.

## Examples

```
GET nonexisting
SET mykey "Hello"
GET mykey
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/get/
