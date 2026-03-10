# realpath_cache_size

Source: https://devdocs.io/php/function.realpath-cache-size

(PHP 5 >= 5.3.2, PHP 7, PHP 8)

realpath_cache_size — Get realpath cache size

### Description

```
realpath_cache_size(): int
```

Get the amount of memory used by the realpath cache.

### Parameters

This function has no parameters.

### Return Values

Returns how much memory realpath cache is using.

### Examples

Example #1 realpath_cache_size() example

```
<?php
var_dump(realpath_cache_size());
?>
```

The above example will output something similar to:

```
int(412)
```

### See Also

- realpath_cache_get() - Get realpath cache entries
- The realpath_cache_size configuration option

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.realpath-cache-size.php
