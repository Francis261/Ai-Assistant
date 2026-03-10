# pcntl_waitid

Source: https://devdocs.io/php/function.pcntl-waitid

(PHP 8 >= 8.4.0)

pcntl_waitid — Waits for a child process to change state

### Description

```
pcntl_waitid(
 int $idtype = P_ALL,
 ?int $id = null,
 array &$info = [],
 int $flags = WEXITED,
 array &$resource_usage = []
): bool
```

Obtains status information pertaining to termination, stop, and/or continue events in one of the caller's child processes.

Unless WNOHANG flag is passed, the calling process will become blocked until an error occurs, or status information becomes available that satisfies all of the following:

- The status information is from one of the child processes in the set of child processes specified by the idtype and id arguments.
- The state change in the status information matches one of the state change flags set in the flags argument.

If matching status information is available prior to the call to pcntl_waitid(), return shall be immediate. If matching status information is available for two or more child processes, the order in which their status is reported is unspecified.

Note:

This documentation covers the POSIX specification of the waitid function, along with some additional parameters specific to implementations on Linux, NetBSD and FreeBSD. Please see your system's waitid(2) man page for specific details as to how waitid works on your system.

### Parameters

The info parameter is set to an array containing information about the signal.

info array may contain the following keys:

- signo: Signal number
- errno: System error number
- code: Signal code
- status: Exit value or signal
- pid: Sending process ID
- uid: Real user ID of sending process
- utime: User time consumed
- stime: System time consumed

The value of flags is the value of zero or more of the following constants OR'ed together:

The resource_usage parameter is set to an array containing resource usage statistics from the child process. This is supported either if the wait6 system call is available (e.g. on FreeBSD), or on Linux through the raw waitid system call.

### Return Values

pcntl_waitid() returns true if WNOHANG was specified and status is not available for any process specified by idtype and id.

pcntl_waitid() returns true due to the change of state of one of its children.

Otherwise, false is returned and pcntl_get_last_error() can be used to get the errno error number.

Note:

Once an errno error number has been obtained, pcntl_strerror() can be used to get the text message associated with it.

### Errors/Exceptions

### Changelog

### See Also

- pcntl_waitpid() - Waits on or returns the status of a forked child
- pcntl_wait() - Waits on or returns the status of a forked child
- pcntl_fork() - Forks the currently running process
- pcntl_signal() - Installs a signal handler
- pcntl_wifexited() - Checks if status code represents a normal exit
- pcntl_wifstopped() - Checks whether the child process is currently stopped
- pcntl_wifsignaled() - Checks whether the status code represents a termination due to a signal
- pcntl_wexitstatus() - Returns the return code of a terminated child
- pcntl_wtermsig() - Returns the signal which caused the child to terminate
- pcntl_wstopsig() - Returns the signal which caused the child to stop

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-waitid.php
