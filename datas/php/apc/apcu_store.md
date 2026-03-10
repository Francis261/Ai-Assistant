# apcu_store

Source: https://devdocs.io/php/function.apcu-store

(PECL apcu >= 4.0.0)

apcu_store — Cache a variable in the data store

### Description

```
apcu_store(string $key, mixed $var, int $ttl = 0): bool
```

```
apcu_store(array $values, mixed $unused = NULL, int $ttl = 0): array
```

Cache a variable in the data store.

Note: Unlike many other mechanisms in PHP, variables stored using apcu_store() will persist between requests (until the value is removed from the cache).

### Parameters

Store the variable using this name. keys are cache-unique, so storing a second value with the same key will overwrite the original value.

The variable to store

Time To Live; store var in the cache for ttl seconds. After the ttl has passed, the stored variable will be expunged from the cache (on the next request). If no ttl is supplied (or if the ttl is 0), the value will persist until it is removed from the cache manually, or otherwise fails to exist in the cache (clear, restart, etc.).

Names in key, variables in value.

### Return Values

Returns true on success or false on failure. Second syntax returns array with error keys.

### Examples

Example #1 A apcu_store() example

```
<?php
$bar = 'BAR';
apcu_store('foo', $bar);
var_dump(apcu_fetch('foo'));
?>
```

The above example will output:

```
string(3) "BAR"
```

### See Also

- apcu_add() - Cache a new variable in the data store
- apcu_fetch() - Fetch a stored variable from the cache
- apcu_delete() - Removes a stored variable from the cache

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apcu-store.php
