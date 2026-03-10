# COPY

Source: https://devdocs.io/redis/copy/index

```
COPY
```

```
COPY source destination [DB destination-db] [REPLACE]
```

This command copies the value stored at the source key to the destination key.

By default, the destination key is created in the logical database used by the connection. The DB option allows specifying an alternative logical database index for the destination key.

The command returns an error when the destination key already exists. The REPLACE option removes the destination key before copying the value to it.

## Return

Integer reply, specifically:

- 1 if source was copied.
- 0 if source was not copied.

## Examples

```
SET dolly "sheep"
COPY dolly clone
GET clone
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/copy/
