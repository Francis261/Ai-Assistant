# memory_get_usage

Source: https://devdocs.io/php/function.memory-get-usage

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

memory_get_usage — Returns the amount of memory allocated to PHP

### Description

```
memory_get_usage(bool $real_usage = false): int
```

Returns the amount of memory, in bytes, that's currently being allocated to your PHP script.

### Parameters

Set this to true to get total memory allocated from system, including unused pages. If not set or false only the used memory is reported.

Note:

PHP does not track memory that is not allocated by emalloc()

### Return Values

Returns the memory amount in bytes.

### Examples

Example #1 A memory_get_usage() example

```
<?php
// This is only an example, the numbers below will
// differ depending on your system

echo memory_get_usage() . "\n"; // 36640

$a = str_repeat("Hello", 4242);

echo memory_get_usage() . "\n"; // 57960

unset($a);

echo memory_get_usage() . "\n"; // 36744

?>
```

### See Also

- memory_get_peak_usage() - Returns the peak of memory allocated by PHP
- memory_limit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.memory-get-usage.php
