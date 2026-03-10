# apcu_delete

Source: https://devdocs.io/php/function.apcu-delete

(PECL apcu >= 4.0.0)

apcu_delete — Removes a stored variable from the cache

### Description

```
apcu_delete(mixed $key): mixed
```

Removes a stored variable from the cache.

### Parameters

A key used to store the value as a string for a single key, or as an array of strings for several keys, or as an APCUIterator object.

### Return Values

If key is an array, an indexed array of the keys is returned. Otherwise true is returned on success, or false on failure.

### Examples

Example #1 A apcu_delete() example

```
<?php
$bar = 'BAR';
apcu_store('foo', $bar);
apcu_delete('foo');
// this is obviously useless in this form

// Alternatively delete multiple keys.
apcu_delete(['foo', 'bar', 'baz']);

// Or use an Iterator with a regular expression.
apcu_delete(new APCUIterator('#^myprefix_#'));
?>
```

### See Also

- apcu_store() - Cache a variable in the data store
- apcu_fetch() - Fetch a stored variable from the cache
- apcu_clear_cache() - Clears the APCu cache
- APCUIterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apcu-delete.php
