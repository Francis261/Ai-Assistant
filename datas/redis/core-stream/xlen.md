# XLEN

Source: https://devdocs.io/redis/xlen/index

```
XLEN
```

```
XLEN key
```

Returns the number of entries inside a stream. If the specified key does not exist the command returns zero, as if the stream was empty. However note that unlike other Redis types, zero-length streams are possible, so you should call TYPE or EXISTS in order to check if a key exists or not.

Streams are not auto-deleted once they have no entries inside (for instance after an XDEL call), because the stream may have consumer groups associated with it.

## Return

Integer reply: the number of entries of the stream at key.

## Examples

```
XADD mystream * item 1
XADD mystream * item 2
XADD mystream * item 3
XLEN mystream
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/xlen/
