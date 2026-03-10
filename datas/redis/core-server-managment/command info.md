# COMMAND

Source: https://devdocs.io/redis/command-info/index

```
COMMAND INFO
```

```
COMMAND INFO [command-name [command-name ...]]
```

Returns Array reply of details about multiple Redis commands.

Same result format as COMMAND except you can specify which commands get returned.

If you request details about non-existing commands, their return position will be nil.

## Return

Array reply: nested list of command details.

## Examples

```
COMMAND INFO get set eval
COMMAND INFO foo evalsha config bar
```

## History

- Starting with Redis version 7.0.0: Allowed to be called with no argument to get info on all commands.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/command-info/
