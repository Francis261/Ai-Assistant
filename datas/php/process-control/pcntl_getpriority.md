# pcntl_getpriority

Source: https://devdocs.io/php/function.pcntl-getpriority

(PHP 5, PHP 7, PHP 8)

pcntl_getpriority — Get the priority of any process

### Description

```
pcntl_getpriority(?int $process_id = null, int $mode = PRIO_PROCESS): int|false
```

pcntl_getpriority() gets the priority of process_id. Because priority levels can differ between system types and kernel versions, please see your system's getpriority(2) man page for specific details.

### Parameters

If null, the process id of the current process is used.

One of PRIO_PGRP, PRIO_USER, PRIO_PROCESS, PRIO_DARWIN_BG or PRIO_DARWIN_THREAD.

### Return Values

pcntl_getpriority() returns the priority of the process or false on error. A lower numerical value causes more favorable scheduling.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Changelog

### See Also

- pcntl_setpriority() - Change the priority of any process

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-getpriority.php
