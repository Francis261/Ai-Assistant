# memory_get_peak_usage

Source: https://devdocs.io/php/function.memory-get-peak-usage

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

memory_get_peak_usage — Returns the peak of memory allocated by PHP

### Description

```
memory_get_peak_usage(bool $real_usage = false): int
```

Returns the peak of memory, in bytes, that's been allocated to your PHP script.

### Parameters

Set this to true to get the real size of memory allocated from system. If not set or false only the memory used by emalloc() is reported.

### Return Values

Returns the memory peak in bytes.

### See Also

- memory_get_usage() - Returns the amount of memory allocated to PHP
- memory_reset_peak_usage() - Reset the peak memory usage
- memory_limit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.memory-get-peak-usage.php
