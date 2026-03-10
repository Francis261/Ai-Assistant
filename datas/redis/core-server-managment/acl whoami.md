# ACL

Source: https://devdocs.io/redis/acl-whoami/index

```
ACL WHOAMI
```

```
ACL WHOAMI
```

Return the username the current connection is authenticated with. New connections are authenticated with the "default" user. They can change user using AUTH.

## Return

Bulk string reply: the username of the current connection.

## Examples

```
> ACL WHOAMI
"default"
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/acl-whoami/
