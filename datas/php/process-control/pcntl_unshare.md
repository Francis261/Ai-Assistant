# pcntl_unshare

Source: https://devdocs.io/php/function.pcntl-unshare

(PHP 7 >= 7.4.0, PHP 8)

pcntl_unshare — Dissociates parts of the process execution context

### Description

```
pcntl_unshare(int $flags): bool
```

pcntl_unshare() allows a process to disassociate parts of its execution context that are currently being shared with other processes. The main use of pcntl_unshare() is to allow a process to control its shared execution context without creating a new process.

### Parameters

The flags parameter is a bitmask that specifies which parts of the execution context should be unshared. This parameter is specified by ORing together zero or more of the CLONE_* constants:

- CLONE_NEWNS
- CLONE_NEWIPC
- CLONE_NEWUTS
- CLONE_NEWNET
- CLONE_NEWPID
- CLONE_NEWUSER
- CLONE_NEWCGROUP

### Return Values

Returns 0 on success, -1 otherwise. On failure it sets an error code, that can be retrieved with pcntl_get_last_error().

### See Also

- PCNTL Constants
- pcntl_get_last_error() - Retrieve the error number set by the last pcntl function which failed

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-unshare.php
