# shm_remove_var

Source: https://devdocs.io/php/function.shm-remove-var

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_remove_var — Removes a variable from shared memory

### Description

```
shm_remove_var(SysvSharedMemory $shm, int $key): bool
```

Removes a variable with a given key and frees the occupied memory.

### Parameters

A shared memory segment obtained from shm_attach().

The variable key.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- shm_remove() - Removes shared memory from Unix systems

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shm-remove-var.php
