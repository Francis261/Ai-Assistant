# shm_get_var

Source: https://devdocs.io/php/function.shm-get-var

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_get_var — Returns a variable from shared memory

### Description

```
shm_get_var(SysvSharedMemory $shm, int $key): mixed
```

shm_get_var() returns the variable with a given key, in the given shared memory segment. The variable is still present in the shared memory.

### Parameters

A shared memory segment obtained from shm_attach().

The variable key.

### Return Values

Returns the variable with the given key.

### Changelog

### See Also

- shm_has_var() - Check whether a specific entry exists
- shm_put_var() - Inserts or updates a variable in shared memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shm-get-var.php
