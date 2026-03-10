# apcu_cache_info

Source: https://devdocs.io/php/function.apcu-cache-info

(PECL apcu >= 4.0.0)

apcu_cache_info — Retrieves cached information from APCu's data store

### Description

```
apcu_cache_info(bool $limited = false): array|false
```

Retrieves cached information and meta-data from APC's data store.

### Parameters

If limited is true, the return value will exclude the individual list of cache entries. This is useful when trying to optimize calls for statistics gathering.

### Return Values

Array of cached data (and meta-data) or false on failure

Note: apcu_cache_info() will raise a warning if it is unable to retrieve APC cache data. This typically occurs when APC is not enabled.

### Changelog

### Examples

Example #1 A apcu_cache_info() example

```
<?php
print_r(apcu_cache_info());
?>
```

The above example will output something similar to:

```
Array
(
    [num_slots] => 2000
    [ttl] => 0
    [num_hits] => 9
    [num_misses] => 3
    [start_time] => 1123958803
    [cache_list] => Array
        (
            [0] => Array
                (
                    [filename] => /path/to/apcu_test.php
                    [device] => 29954
                    [inode] => 1130511
                    [type] => file
                    [num_hits] => 1
                    [mtime] => 1123960686
                    [creation_time] => 1123960696
                    [deletion_time] => 0
                    [access_time] => 1123962864
                    [ref_count] => 1
                    [mem_size] => 677
                )
            [1] => Array (...iterates for each cached file)
)
```

### See Also

- APCu configuration directives
- APCUIterator::getTotalSize() - Get total cache size
- APCUIterator::getTotalHits() - Get total cache hits
- APCUIterator::getTotalCount() - Get total count

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apcu-cache-info.php
