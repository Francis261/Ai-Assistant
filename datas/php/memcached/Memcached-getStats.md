# Memcached::getStats

Source: https://devdocs.io/php/memcached.getstats

(PECL memcached >= 0.1.0)

Memcached::getStats — Get server pool statistics

### Description

```
public Memcached::getStats(?string $type = null): array|false
```

Memcached::getStats() returns an array containing the state of all available memcache servers. See » memcache protocol specification for details on these statistics.

### Parameters

The type of statistics to fetch.

### Return Values

Array of server statistics, one entry per server, or false on failure.

### Examples

Example #1 Memcached::getStats() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

print_r($m->getStats());
?>
```

The above example will output something similar to:

```
Array
(
    [localhost:11211] => Array
        (
            [pid] => 4933
            [uptime] => 786123
            [threads] => 1
            [time] => 1233868010
            [pointer_size] => 32
            [rusage_user_seconds] => 0
            [rusage_user_microseconds] => 140000
            [rusage_system_seconds] => 23
            [rusage_system_microseconds] => 210000
            [curr_items] => 145
            [total_items] => 2374
            [limit_maxbytes] => 67108864
            [curr_connections] => 2
            [total_connections] => 151
            [connection_structures] => 3
            [bytes] => 20345
            [cmd_get] => 213343
            [cmd_set] => 2381
            [get_hits] => 204223
            [get_misses] => 9120
            [evictions] => 0
            [bytes_read] => 9092476
            [bytes_written] => 15420512
            [version] => 1.2.6
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getstats.php
