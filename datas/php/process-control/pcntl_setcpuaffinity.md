# pcntl_setcpuaffinity

Source: https://devdocs.io/php/function.pcntl-setcpuaffinity

(PHP 8 >= 8.4.0)

pcntl_setcpuaffinity — Set the cpu affinity of a process

### Description

```
pcntl_setcpuaffinity(?int $pid = null, array $hmask = ?): bool
```

Sets the cpu affinity for the pid with the cpu affinity mask given by hmask.

### Parameters

### Return Values

Returns true on success or false on failure.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Errors/Exceptions

A TypeError is thrown if one of the cpu id from the hmask is invalid. A ValueError is thrown if pid is an invalid process id or the cpu mask had failed to be created.

### See Also

- pcntl_getcpuaffinity() - Get the cpu affinity of a process

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-setcpuaffinity.php
