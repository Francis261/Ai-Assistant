# posix_times

Source: https://devdocs.io/php/function.posix-times

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_times — Get process times

### Description

```
posix_times(): array|false
```

Gets information about the current CPU usage.

### Parameters

This function has no parameters.

### Return Values

Returns a hash of strings with information about the current process CPU usage. The indices of the hash are:

- ticks - the number of clock ticks that have elapsed since reboot.
- utime - user time used by the current process.
- stime - system time used by the current process.
- cutime - user time used by current process and children.
- cstime - system time used by current process and children.

### Examples

Example #1 Example use of posix_times()

```
<?php

$times = posix_times();

print_r($times);
?>
```

The above example will output something similar to:

```
Array
(
    [ticks] => 25814410
    [utime] => 1
    [stime] => 1
    [cutime] => 0
    [cstime] => 0
)
```

### Notes

This function isn't reliable to use, it may return negative values for high times.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-times.php
