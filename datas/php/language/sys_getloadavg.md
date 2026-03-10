# sys_getloadavg

Source: https://devdocs.io/php/function.sys-getloadavg

(PHP 5 >= 5.1.3, PHP 7, PHP 8)

sys_getloadavg — Gets system load average

### Description

```
sys_getloadavg(): array|false
```

Returns three samples representing the average system load (the number of processes in the system run queue) over the last 1, 5 and 15 minutes, respectively. Returns false on failure.

### Parameters

This function has no parameters.

### Return Values

Returns an array with three samples (last 1, 5 and 15 minutes).

### Examples

Example #1 A sys_getloadavg() example

```
<?php
$load = sys_getloadavg();
if ($load[0] > 0.80) {
    header('HTTP/1.1 503 Too busy, try again later');
    die('Server too busy. Please try again later.');
}
?>
```

### Notes

Note: This function is not implemented on Windows platforms.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sys-getloadavg.php
