# ACL

Source: https://devdocs.io/redis/acl-deluser/index

```
ACL DELUSER
```

```
ACL DELUSER username [username ...]
```

Delete all the specified ACL users and terminate all the connections that are authenticated with such users. Note: the special default user cannot be removed from the system, this is the default user that every new connection is authenticated with. The list of users may include usernames that do not exist, in such case no operation is performed for the non existing users.

## Return

Integer reply: The number of users that were deleted. This number will not always match the number of arguments since certain users may not exist.

## Examples

```
> ACL DELUSER antirez
1
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/acl-deluser/
