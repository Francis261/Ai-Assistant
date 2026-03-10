# BF.LOADCHUNK

Source: https://devdocs.io/redis/bf.loadchunk/index

```
BF.LOADCHUNK
```

```
BF.LOADCHUNK key iterator data
```

Restores a filter previously saved using SCANDUMP. See the SCANDUMP command for example usage.

This command overwrites any bloom filter stored under key. Make sure that the bloom filter is not be changed between invocations.

### Parameters

- key: Name of the key to restore
- iter: Iterator value associated with data (returned by SCANDUMP)
- data: Current data chunk (returned by SCANDUMP)

## Return

Simple string reply - OK if executed correctly, or Error reply otherwise.

## Examples

See BF.SCANDUMP for an example.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/bf.loadchunk/
