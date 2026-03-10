# gc_status

Source: https://devdocs.io/php/function.gc-status

(PHP 7 >= 7.3.0, PHP 8)

gc_status — Gets information about the garbage collector

### Description

```
gc_status(): array
```

Gets information about the current state of the garbage collector.

### Parameters

This function has no parameters.

### Return Values

Returns an associative array with the following elements:

- "runs"
- "collected"
- "threshold"
- "roots"
- "running"
- "protected"
- "full"
- "buffer_size"
- "application_time"
- "collector_time"
- "destructor_time"
- "free_time"

### Changelog

### Examples

Example #1 gc_status() Usage

```
<?php

// create object tree that needs gc collection
$a = new stdClass();
$a->b = [];
for ($i = 0; $i < 100000; $i++) {
    $b = new stdClass();
    $b->a = $a;
    $a->b[] = $b;
}
unset($a);
unset($b);
gc_collect_cycles();

var_dump(gc_status());
```

The above example will output something similar to:

```
array(4) {
  ["runs"]=>
  int(5)
  ["collected"]=>
  int(100002)
  ["threshold"]=>
  int(50001)
  ["roots"]=>
  int(0)
}
```

Output of the above example in PHP 8.3 is similar to:

```
array(12) {
  ["running"]=>
  bool(false)
  ["protected"]=>
  bool(false)
  ["full"]=>
  bool(false)
  ["runs"]=>
  int(5)
  ["collected"]=>
  int(100002)
  ["threshold"]=>
  int(50001)
  ["buffer_size"]=>
  int(131072)
  ["roots"]=>
  int(0)
  ["application_time"]=>
  float(0.031182458)
  ["collector_time"]=>
  float(0.020106291)
  ["destructor_time"]=>
  float(0)
  ["free_time"]=>
  float(0.003707167)
}
```

### See Also

- Garbage Collection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gc-status.php
