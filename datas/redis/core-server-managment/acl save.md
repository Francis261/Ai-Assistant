# ACL

Source: https://devdocs.io/redis/acl-save/index

```
ACL SAVE
```

```
ACL SAVE
```

When Redis is configured to use an ACL file (with the aclfile configuration option), this command will save the currently defined ACLs from the server memory to the ACL file.

## Return

Simple string reply: OK on success.

The command may fail with an error for several reasons: if the file cannot be written or if the server is not configured to use an external ACL file.

## Examples

```
> ACL SAVE
+OK

> ACL SAVE
-ERR There was an error trying to save the ACLs. Please check the server logs for more information
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/acl-save/
