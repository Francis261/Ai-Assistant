# pcntl_setpriority

Source: https://devdocs.io/php/function.pcntl-setpriority

(PHP 5, PHP 7, PHP 8)

pcntl_setpriority — Change the priority of any process

### Description

```
pcntl_setpriority(int $priority, ?int $process_id = null, int $mode = PRIO_PROCESS): bool
```

pcntl_setpriority() sets the priority of process_id.

### Parameters

priority is generally a value in the range -20 to 20. The default priority is 0 while a lower numerical value causes more favorable scheduling. Because priority levels can differ between system types and kernel versions, please see your system's setpriority(2) man page for specific details.

If null, the process id of the current process is used.

One of PRIO_PGRP, PRIO_USER, PRIO_PROCESS, PRIO_DARWIN_BG or PRIO_DARWIN_THREAD.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- pcntl_getpriority() - Get the priority of any process
- pcntl_setpriority()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-setpriority.php
