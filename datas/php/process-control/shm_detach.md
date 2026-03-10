# shm_detach

Source: https://devdocs.io/php/function.shm-detach

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_detach — Disconnects from shared memory segment

### Description

```
shm_detach(SysvSharedMemory $shm): bool
```

shm_detach() disconnects from the shared memory given by the shm created by shm_attach(). Remember, that shared memory still exist in the Unix system and the data is still present.

### Parameters

A shared memory segment obtained from shm_attach().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- shm_attach() - Creates or open a shared memory segment
- shm_remove() - Removes shared memory from Unix systems
- shm_remove_var() - Removes a variable from shared memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shm-detach.php
