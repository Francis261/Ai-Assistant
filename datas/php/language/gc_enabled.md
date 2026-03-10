# gc_enabled

Source: https://devdocs.io/php/function.gc-enabled

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

gc_enabled — Returns status of the circular reference collector

### Description

```
gc_enabled(): bool
```

Returns status of the circular reference collector.

### Parameters

This function has no parameters.

### Return Values

Returns true if the garbage collector is enabled, false otherwise.

### Examples

Example #1 A gc_enabled() example

```
<?php
if(gc_enabled()) gc_collect_cycles();
?>
```

### See Also

- Garbage Collection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gc-enabled.php
