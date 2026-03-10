# xhprof_enable

Source: https://devdocs.io/php/function.xhprof-enable

(PECL xhprof >= 0.9.0)

xhprof_enable — Start xhprof profiler

### Description

```
xhprof_enable(int $flags = 0, array $options = ?): void
```

Start xhprof profiling.

### Parameters

Optional flags to add additional information to the profiling. See the XHprof constants for further information about these flags, e.g., XHPROF_FLAGS_MEMORY to enable memory profiling.

An array of optional options, namely, the 'ignored_functions' option to pass in functions to be ignored during profiling.

### Return Values

null

### Changelog

### Examples

Example #1 xhprof_enable() examples

```
<?php
// 1. elapsed time + memory + CPU profiling; and ignore built-in (internal) functions
xhprof_enable(XHPROF_FLAGS_NO_BUILTINS | XHPROF_FLAGS_CPU | XHPROF_FLAGS_MEMORY);

// 2. elapsed time profiling; ignore call_user_func* during profiling
xhprof_enable(
    0,
    array('ignored_functions' =>  array('call_user_func',
                                        'call_user_func_array')));
                                       
// 3. elapsed time + memory profiling; ignore call_user_func* during profiling
xhprof_enable(
    XHPROF_FLAGS_MEMORY,
    array('ignored_functions' =>  array('call_user_func',
                                        'call_user_func_array')));
?>
```

### See Also

- xhprof_disable() - Stops xhprof profiler
- xhprof_sample_enable() - Start XHProf profiling in sampling mode
- memory_get_usage() - Returns the amount of memory allocated to PHP
- getrusage() - Gets the current resource usages

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xhprof-enable.php
