# xhprof_sample_disable

Source: https://devdocs.io/php/function.xhprof-sample-disable

(PECL xhprof >= 0.9.0)

xhprof_sample_disable — Stops xhprof sample profiler

### Description

```
xhprof_sample_disable(): ?array
```

Stops the sample mode xhprof profiler, and returns the profile info.

### Parameters

This function has no parameters.

### Return Values

An array of xhprof sample data, from the run. Returns null if profiling is not enabled.

### Examples

Example #1 xhprof_sample_disable() example

```
<?php
xhprof_sample_enable();

for ($i = 0; $i <= 10000; $i++) {
    $a = strlen($i);
    $b = $i * $a;
    $c = rand();
}

$xhprof_data = xhprof_sample_disable();

print_r($xhprof_data);
?>
```

The above example will output something similar to:

```
Array
(
    [1272935300.800000] => main()
    [1272935300.900000] => main()
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xhprof-sample-disable.php
