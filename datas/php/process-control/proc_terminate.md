# proc_terminate

Source: https://devdocs.io/php/function.proc-terminate

(PHP 5, PHP 7, PHP 8)

proc_terminate — Kills a process opened by proc_open

### Description

```
proc_terminate(resource $process, int $signal = 15): bool
```

Signals a process (created using proc_open()) that it should terminate. proc_terminate() returns immediately and does not wait for the process to terminate.

proc_terminate() allows you terminate the process and continue with other tasks. You may poll the process (to see if it has stopped yet) by using the proc_get_status() function.

### Parameters

The proc_open() resource that will be closed.

This optional parameter is only useful on POSIX operating systems; you may specify a signal to send to the process using the kill(2) system call. The default is SIGTERM.

### Return Values

Returns the termination status of the process that was run.

### See Also

- proc_open() - Execute a command and open file pointers for input/output
- proc_close() - Close a process opened by proc_open and return the exit code of that process
- proc_get_status() - Get information about a process opened by proc_open

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.proc-terminate.php
