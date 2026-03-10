# xhprof_disable

Source: https://devdocs.io/php/function.xhprof-disable

(PECL xhprof >= 0.9.0)

xhprof_disable — Stops xhprof profiler

### Description

```
xhprof_disable(): ?array
```

Stops the profiler, and returns xhprof data from the run.

### Parameters

This function has no parameters.

### Return Values

An array of xhprof data, from the run. Returns null if profiling is not enabled.

### Examples

Example #1 xhprof_disable() example

```
<?php
xhprof_enable();

$foo = strlen("foo bar");

$xhprof_data = xhprof_disable();

print_r($xhprof_data);
?>
```

The above example will output something similar to:

```
Array
(
    [main()==>strlen] => Array
        (
            [ct] => 1
            [wt] => 279
        )

    [main()==>xhprof_disable] => Array
        (
            [ct] => 1
            [wt] => 9
        )

    [main()] => Array
        (
            [ct] => 1
            [wt] => 610
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xhprof-disable.php
