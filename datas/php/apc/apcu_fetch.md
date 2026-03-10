# apcu_fetch

Source: https://devdocs.io/php/function.apcu-fetch

(PECL apcu >= 4.0.0)

apcu_fetch — Fetch a stored variable from the cache

### Description

```
apcu_fetch(mixed $key, bool &$success = ?): mixed
```

Fetches an entry from the cache.

### Parameters

The key used to store the value (with apcu_store()). If an array is passed then each element is fetched and returned.

Set to true in success and false in failure.

### Return Values

The stored variable or array of variables on success; false on failure

### Changelog

### Examples

Example #1 A apcu_fetch() example

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

- apcu_store() - Cache a variable in the data store
- apcu_delete() - Removes a stored variable from the cache
- APCUIterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apcu-fetch.php
