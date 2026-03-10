# XSETID

Source: https://devdocs.io/redis/xsetid/index

```
XSETID
```

```
XSETID key last-id [ENTRIESADDED entries-added]
  [MAXDELETEDID max-deleted-id]
```

The XSETID command is an internal command. It is used by a Redis master to replicate the last delivered ID of streams.

## History

- Starting with Redis version 7.0.0: Added the entries_added and max_deleted_entry_id arguments.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/xsetid/
