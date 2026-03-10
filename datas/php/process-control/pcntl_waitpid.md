# pcntl_waitpid

Source: https://devdocs.io/php/function.pcntl-waitpid

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_waitpid — Waits on or returns the status of a forked child

### Description

```
pcntl_waitpid(
 int $process_id,
 int &$status,
 int $flags = 0,
 array &$resource_usage = []
): int
```

Suspends execution of the current process until a child as specified by the process_id argument has exited, or until a signal is delivered whose action is to terminate the current process or to call a signal handling function.

If a child as requested by process_id has already exited by the time of the call (a so-called "zombie" process), the function returns immediately. Any system resources used by the child are freed. Please see your system's waitpid(2) man page for specific details as to how waitpid works on your system.

### Parameters

The value of process_id can be one of the following:

Note:

Specifying -1 as the process_id is equivalent to the functionality pcntl_wait() provides (minus flags).

pcntl_waitpid() will store status information in the status parameter which can be evaluated using the following functions: pcntl_wifexited(), pcntl_wifstopped(), pcntl_wifsignaled(), pcntl_wexitstatus(), pcntl_wtermsig() and pcntl_wstopsig().

The value of flags is the value of zero or more of the following two global constants OR'ed together:

### Return Values

pcntl_waitpid() returns the process ID of the child which exited, -1 on error or zero if WNOHANG was used and no child was available

### See Also

- pcntl_fork() - Forks the currently running process
- pcntl_signal() - Installs a signal handler
- pcntl_wifexited() - Checks if status code represents a normal exit
- pcntl_wifstopped() - Checks whether the child process is currently stopped
- pcntl_wifsignaled() - Checks whether the status code represents a termination due to a signal
- pcntl_wexitstatus() - Returns the return code of a terminated child
- pcntl_wtermsig() - Returns the signal which caused the child to terminate
- pcntl_wstopsig() - Returns the signal which caused the child to stop

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-waitpid.php
