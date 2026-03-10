# proc_close

Source: https://devdocs.io/php/function.proc-close

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

proc_close — Close a process opened by proc_open() and return the exit code of that process

### Description

```
proc_close(resource $process): int
```

proc_close() is similar to pclose() except that it only works on processes opened by proc_open(). proc_close() waits for the process to terminate, and returns its exit code. Open pipes to that process are closed when this function is called, in order to avoid a deadlock - the child process may not be able to exit while the pipes are open.

### Parameters

The proc_open() resource that will be closed.

### Return Values

Returns the termination status of the process that was run. In case of an error then -1 is returned.

Note:

If PHP has been compiled with --enable-sigchild, the return value of this function is undefined.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.proc-close.php
