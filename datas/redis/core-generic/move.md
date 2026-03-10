# MOVE

Source: https://devdocs.io/redis/move/index

```
MOVE
```

```
MOVE key db
```

Move key from the currently selected database (see SELECT) to the specified destination database. When key already exists in the destination database, or it does not exist in the source database, it does nothing. It is possible to use MOVE as a locking primitive because of this.

## Return

Integer reply, specifically:

- 1 if key was moved.
- 0 if key was not moved.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/move/
