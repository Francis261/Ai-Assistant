# COMMAND

Source: https://devdocs.io/redis/command-list/index

```
COMMAND LIST
```

```
COMMAND LIST [FILTERBY <MODULE module-name | ACLCAT category |
  PATTERN pattern>]
```

Return an array of the server's command names.

You can use the optional FILTERBY modifier to apply one of the following filters:

- MODULE module-name: get the commands that belong to the module specified by module-name.
- ACLCAT category: get the commands in the ACL category specified by category.
- PATTERN pattern: get the commands that match the given glob-like pattern.

## Return

Array reply: a list of command names.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/command-list/
