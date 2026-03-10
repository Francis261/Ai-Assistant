# HEXISTS

Source: https://devdocs.io/redis/hexists/index

```
HEXISTS
```

```
HEXISTS key field
```

Returns if field is an existing field in the hash stored at key.

## Return

Integer reply, specifically:

- 1 if the hash contains field.
- 0 if the hash does not contain field, or key does not exist.

## Examples

```
HSET myhash field1 "foo"
HEXISTS myhash field1
HEXISTS myhash field2
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/hexists/
