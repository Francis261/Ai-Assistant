# wincache_ucache_cas

Source: https://devdocs.io/php/function.wincache-ucache-cas

(PECL wincache >= 1.1.0)

wincache_ucache_cas — Compares the variable with old value and assigns new value to it

### Description

```
wincache_ucache_cas(string $key, int $old_value, int $new_value): bool
```

Compares the variable associated with the key with old_value and if it matches then assigns the new_value to it.

### Parameters

The key that is used to store the variable in the cache. key is case sensitive.

Old value of the variable pointed by key in the user cache. The value should be of type long, otherwise the function returns false.

New value which will get assigned to variable pointer by key if a match is found. The value should be of type long, otherwise the function returns false.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Using wincache_ucache_cas()

```
<?php
wincache_ucache_set('counter', 2922);
var_dump(wincache_ucache_cas('counter', 2922, 1));
var_dump(wincache_ucache_get('counter'));
?>
```

The above example will output:

```
bool(true) 
int(1)
```

### See Also

- wincache_ucache_inc() - Increments the value associated with the key
- wincache_ucache_dec() - Decrements the value associated with the key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.wincache-ucache-cas.php
