# XINFO

Source: https://devdocs.io/redis/xinfo-consumers/index

```
XINFO CONSUMERS
```

```
XINFO CONSUMERS key group
```

This command returns the list of consumers that belong to the <groupname> consumer group of the stream stored at <key>.

The following information is provided for each consumer in the group:

- name: the consumer's name
- pending: the number of entries in the PEL: pending messages for the consumer, which are messages that were delivered but are yet to be acknowledged
- idle: the number of milliseconds that have passed since the consumer's last attempted interaction (Examples: XREADGROUP, XCLAIM, XAUTOCLAIM)
- inactive: the number of milliseconds that have passed since the consumer's last successful interaction (Examples: XREADGROUP that actually read some entries into the PEL, XCLAIM/XAUTOCLAIM that actually claimed some entries)

@reply

Array reply: a list of consumers.

## Examples

```
> XINFO CONSUMERS mystream mygroup
1) 1) name
   2) "Alice"
   3) pending
   4) (integer) 1
   5) idle
   6) (integer) 9104628
   7) inactive
   8) (integer) 18104698
2) 1) name
   2) "Bob"
   3) pending
   4) (integer) 1
   5) idle
   6) (integer) 83841983
   7) inactive
   8) (integer) 993841998
```

## History

- Starting with Redis version 7.2.0: Added the inactive field.

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/xinfo-consumers/
