# MSET

Source: https://devdocs.io/redis/mset/index

```
MSET
```

```
MSET key value [key value ...]
```

Sets the given keys to their respective values. MSET replaces existing values with new values, just as regular SET. See MSETNX if you don't want to overwrite existing values.

MSET is atomic, so all given keys are set at once. It is not possible for clients to see that some of the keys were updated while others are unchanged.

## Return

Simple string reply: always OK since MSET can't fail.

## Examples

```
MSET key1 "Hello" key2 "World"
GET key1
GET key2
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/mset/
