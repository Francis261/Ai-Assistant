# gettimeofday

Source: https://devdocs.io/php/function.gettimeofday

(PHP 4, PHP 5, PHP 7, PHP 8)

gettimeofday — Get current time

### Description

```
gettimeofday(bool $as_float = false): array|float
```

This is an interface to gettimeofday(2). It returns an associative array containing the data returned from the system call.

### Parameters

When set to true, a float instead of an array is returned.

### Return Values

By default an array is returned. If as_float is set, then a float is returned.

Array keys:

- "sec" - seconds since the Unix Epoch
- "usec" - microseconds
- "minuteswest" - minutes west of Greenwich
- "dsttime" - type of dst correction

### Examples

Example #1 gettimeofday() example

```
<?php
print_r(gettimeofday());

echo gettimeofday(true);
```

The above example will output something similar to:

```
Array
(
    [sec] => 1073504408
    [usec] => 238215
    [minuteswest] => 0
    [dsttime] => 1
)
1073504408.23910
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gettimeofday.php
