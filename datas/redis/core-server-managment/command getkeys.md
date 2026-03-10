# COMMAND

Source: https://devdocs.io/redis/command-getkeys/index

```
COMMAND GETKEYS
```

```
COMMAND GETKEYS command [arg [arg ...]]
```

Returns Array reply of keys from a full Redis command.

COMMAND GETKEYS is a helper command to let you find the keys from a full Redis command.

COMMAND provides information on how to find the key names of each command (see firstkey, key specifications, and movablekeys), but in some cases it's not possible to find keys of certain commands and then the entire command must be parsed to discover some / all key names. You can use COMMAND GETKEYS or COMMAND GETKEYSANDFLAGS to discover key names directly from how Redis parses the commands.

## Return

Array reply: list of keys from your command.

## Examples

```
COMMAND GETKEYS MSET a b c d e f
COMMAND GETKEYS EVAL "not consulted" 3 key1 key2 key3 arg1 arg2 arg3 argN
COMMAND GETKEYS SORT mylist ALPHA STORE outlist
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/command-getkeys/
