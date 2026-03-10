# wincache_ucache_inc

Source: https://devdocs.io/php/function.wincache-ucache-inc

(PECL wincache >= 1.1.0)

wincache_ucache_inc — Increments the value associated with the key

### Description

```
wincache_ucache_inc(string $key, int $inc_by = 1, bool &$success = ?): mixed
```

Increments the value associated with the key by 1 or as specified by inc_by.

### Parameters

The key that was used to store the variable in the cache. key is case sensitive.

The value by which the variable associated with the key will get incremented. If the argument is a floating point number it will be truncated to nearest integer. The variable associated with the key should be of type long, otherwise the function fails and returns false.

Will be set to true on success and false on failure.

### Return Values

Returns the incremented value on success and false on failure.

### Examples

Example #1 Using wincache_ucache_inc()

```
<?php
wincache_ucache_set('counter', 1);
var_dump(wincache_ucache_inc('counter', 2921, $success));
var_dump($success);
?>
```

The above example will output:

```
int(2922) 
bool(true)
```

### See Also

- wincache_ucache_dec() - Decrements the value associated with the key
- wincache_ucache_cas() - Compares the variable with old value and assigns new value to it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.wincache-ucache-inc.php
