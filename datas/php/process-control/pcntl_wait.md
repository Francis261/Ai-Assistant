# pcntl_wait

Source: https://devdocs.io/php/function.pcntl-wait

(PHP 5, PHP 7, PHP 8)

pcntl_wait — Waits on or returns the status of a forked child

### Description

```
pcntl_wait(int &$status, int $flags = 0, array &$resource_usage = []): int
```

The wait function suspends execution of the current process until a child has exited, or until a signal is delivered whose action is to terminate the current process or to call a signal handling function. If a child has already exited by the time of the call (a so-called "zombie" process), the function returns immediately. Any system resources used by the child are freed. Please see your system's wait(2) man page for specific details as to how wait works on your system.

Note:

This function is equivalent to calling pcntl_waitpid() with a -1 process_id and no flags.

### Parameters

pcntl_wait() will store status information in the status parameter which can be evaluated using the following functions: pcntl_wifexited(), pcntl_wifstopped(), pcntl_wifsignaled(), pcntl_wexitstatus(), pcntl_wtermsig() and pcntl_wstopsig().

If wait3 is available on your system (mostly BSD-style systems), you can provide the optional flags parameter. If this parameter is not provided, wait will be used for the system call. If wait3 is not available, providing a value for flags will have no effect. The value of flags is the value of zero or more of the following two constants OR'ed together:

### Return Values

pcntl_wait() returns the process ID of the child which exited, -1 on error or zero if WNOHANG was provided as an option (on wait3-available systems) and no child was available.

### See Also

- pcntl_fork() - Forks the currently running process
- pcntl_signal() - Installs a signal handler
- pcntl_wifexited() - Checks if status code represents a normal exit
- pcntl_wifstopped() - Checks whether the child process is currently stopped
- pcntl_wifsignaled() - Checks whether the status code represents a termination due to a signal
- pcntl_wexitstatus() - Returns the return code of a terminated child
- pcntl_wtermsig() - Returns the signal which caused the child to terminate
- pcntl_wstopsig() - Returns the signal which caused the child to stop
- pcntl_waitpid() - Waits on or returns the status of a forked child

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-wait.php
