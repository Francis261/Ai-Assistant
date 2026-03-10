# XGROUP

Source: https://devdocs.io/redis/xgroup-destroy/index

```
XGROUP DESTROY
```

```
XGROUP DESTROY key group
```

The XGROUP DESTROY command completely destroys a consumer group.

The consumer group will be destroyed even if there are active consumers, and pending messages, so make sure to call this command only when really needed.

## Return

Integer reply: the number of destroyed consumer groups (0 or 1)

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/xgroup-destroy/
