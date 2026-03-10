# apcu_key_info

Source: https://devdocs.io/php/function.apcu-key-info

(No version information available, might only be in Git)

apcu_key_info — Get detailed information about the cache key

### Description

```
apcu_key_info(string $key): ?array
```

Get detailed information about the cache key

### Parameters

Get detailed information about the cache key

### Return Values

An array containing the detailed information about the cache key, or null if the key does not exist.

### Examples

Example #1 A apcu_key_info() example

```
<?php
apcu_add('a','b');
var_dump(apcu_key_info('a'));
?>
```

The above example will output:

```
array(7) {
  ["hits"]=>
  int(0)
  ["access_time"]=>
  int(1606701783)
  ["mtime"]=>
  int(1606701783)
  ["creation_time"]=>
  int(1606701783)
  ["deletion_time"]=>
  int(0)
  ["ttl"]=>
  int(0)
  ["refs"]=>
  int(0)
}
```

### See Also

- apcu_store() - Cache a variable in the data store
- apcu_fetch() - Fetch a stored variable from the cache
- apcu_delete() - Removes a stored variable from the cache

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apcu-key-info.php
