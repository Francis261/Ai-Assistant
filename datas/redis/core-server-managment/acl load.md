# ACL

Source: https://devdocs.io/redis/acl-load/index

```
ACL LOAD
```

```
ACL LOAD
```

When Redis is configured to use an ACL file (with the aclfile configuration option), this command will reload the ACLs from the file, replacing all the current ACL rules with the ones defined in the file. The command makes sure to have an all or nothing behavior, that is:

- If every line in the file is valid, all the ACLs are loaded.
- If one or more line in the file is not valid, nothing is loaded, and the old ACL rules defined in the server memory continue to be used.

## Return

Simple string reply: OK on success.

The command may fail with an error for several reasons: if the file is not readable, if there is an error inside the file, and in such case the error will be reported to the user in the error. Finally the command will fail if the server is not configured to use an external ACL file.

## Examples

```
> ACL LOAD
+OK

> ACL LOAD
-ERR /tmp/foo:1: Unknown command or category name in ACL...
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/acl-load/
