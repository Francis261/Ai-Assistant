# FT.CONFIG

Source: https://devdocs.io/redis/ft.config-set/index

```
FT.CONFIG SET
```

```
FT.CONFIG SET option value
```

Set the value of a RediSearch configuration parameter.

Values set using FT.CONFIG SET are not persisted after server restart.

RediSearch configuration parameters are detailed in Configuration parameters.

As detailed in the link above, not all RediSearch configuration parameters can be set at runtime.

Examples

## Required arguments

is name of the configuration option, or '*' for all.

is value of the configuration option.

## Return

FT.CONFIG SET returns a simple string reply OK if executed correctly, or an error reply otherwise.

## Examples

```
127.0.0.1:6379> FT.CONFIG SET TIMEOUT 42
OK
```

## See also

FT.CONFIG GET | FT.CONFIG HELP

## Related topics

RediSearch

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/ft.config-set/
