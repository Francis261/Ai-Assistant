# shm_remove

Source: https://devdocs.io/php/function.shm-remove

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_remove — Removes shared memory from Unix systems

### Description

```
shm_remove(SysvSharedMemory $shm): bool
```

shm_remove() removes the shared memory shm. All data will be destroyed.

### Parameters

A shared memory segment obtained from shm_attach().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- shm_remove_var() - Removes a variable from shared memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shm-remove.php
