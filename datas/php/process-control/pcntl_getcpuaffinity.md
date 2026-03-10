# pcntl_getcpuaffinity

Source: https://devdocs.io/php/function.pcntl-getcpuaffinity

(PHP 8 >= 8.4.0)

pcntl_getcpuaffinity — Get the cpu affinity of a process

### Description

```
pcntl_getcpuaffinity(?int $pid = null): bool|array
```

Retrieve the cpu affinity of the pid.

### Parameters

### Return Values

Returns the cpu affinity mask of the process, or false on failure.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Errors/Exceptions

A ValueError is thrown when pid is an invalid process id or the cpu mask had failed to be created.

If pid is a process for which the current user has no allowed permission, a E_WARNING is emitted.

### See Also

- pcntl_setcpuaffinity() - Set the cpu affinity of a process

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-getcpuaffinity.php
