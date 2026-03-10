# TIME

Source: https://devdocs.io/redis/time/index

```
TIME
```

```
TIME
```

The TIME command returns the current server time as a two items lists: a Unix timestamp and the amount of microseconds already elapsed in the current second. Basically the interface is very similar to the one of the gettimeofday system call.

## Return

Array reply, specifically:

A multi bulk reply containing two elements:

- unix time in seconds.
- microseconds.

## Examples

```
TIME
TIME
```

© 2006–2022 Salvatore SanfilippoLicensed under the Creative Commons Attribution-ShareAlike License 4.0.
 https://redis.io/commands/time/
