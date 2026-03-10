# shm_has_var

Source: https://devdocs.io/php/function.shm-has-var

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

shm_has_var — Check whether a specific entry exists

### Description

```
shm_has_var(SysvSharedMemory $shm, int $key): bool
```

Checks whether a specific key exists inside a shared memory segment.

### Parameters

A shared memory segment obtained from shm_attach().

The variable key.

### Return Values

Returns true if the entry exists, otherwise false

### Changelog

### See Also

- shm_get_var() - Returns a variable from shared memory
- shm_put_var() - Inserts or updates a variable in shared memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shm-has-var.php
