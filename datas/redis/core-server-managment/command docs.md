# COMMAND

Source: https://devdocs.io/redis/command-docs/index

```
COMMAND DOCS
```

```
COMMAND DOCS [command-name [command-name ...]]
```

Return documentary information about commands.

By default, the reply includes all of the server's commands. You can use the optional command-name argument to specify the names of one or more commands.

The reply includes a map for each returned command. The following keys may be included in the mapped reply:

- summary: short command description.
- since: the Redis version that added the command (or for module commands, the module version).
- group: the functional group to which the command belongs. Possible values are:
  - bitmap
  - cluster
  - connection
  - generic
  - geo
  - hash
  - hyperloglog
  - list
  - module
  - pubsub
  - scripting
  - sentinel
  - server
  - set
  - sorted-set
  - stream
  - string
  - transactions
- complexity: a short explanation about the command's time complexity.
- doc_flags: an array of documentation flags. Possible values are:
  - deprecated: the command is deprecated.
  - syscmd: a system command that isn't meant to be called by users.
- deprecated_since: the Redis version that deprecated the command (or for module commands, the module version)..
- replaced_by: the alternative for a deprecated command.
- history: an array of historical notes describing changes to the command's behavior or arguments. Each entry is an array itself, made up of two elements:
  1. The Redis version that the entry applies to.
  2. The description of the change.
- arguments: an array of maps that describe the command's arguments. Please refer to the Redis command arguments page for more information.

- bitmap
- cluster
- connection
- generic
- geo
- hash
- hyperloglog
- list
- module
- pubsub
- scripting
- sentinel
- server
- set
- sorted-set
- stream
- string
- transactions

- deprecated: the command is deprecated.
- syscmd: a system command that isn't meant to be called by users.

1. The Redis version that the entry applies to.
2. The description of the change.

## Return

Array reply: a map as a flattened array as described above.

## Examples

```
COMMAND DOCS SET
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/command-docs/
