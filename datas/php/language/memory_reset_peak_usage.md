# memory_reset_peak_usage

Source: https://devdocs.io/php/function.memory-reset-peak-usage

(PHP 8 >= 8.2.0)

memory_reset_peak_usage — Reset the peak memory usage

### Description

```
memory_reset_peak_usage(): void
```

Resets the peak memory usage returned by the memory_get_peak_usage() function.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 memory_reset_peak_usage() example

```
<?php

var_dump(memory_get_peak_usage());

$a = str_repeat("Hello", 424242);
var_dump(memory_get_peak_usage());

unset($a);
memory_reset_peak_usage();

$a = str_repeat("Hello", 2424);
var_dump(memory_get_peak_usage());

?>
```

The above example will output something similar to:

```
int(422440)
int(2508672)
int(399208)
```

### See Also

- memory_get_peak_usage() - Returns the peak of memory allocated by PHP

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.memory-reset-peak-usage.php
