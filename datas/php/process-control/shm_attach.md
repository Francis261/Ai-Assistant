# shm_attach

Source: https://devdocs.io/php/function.shm-attach

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_attach — Creates or open a shared memory segment

### Description

```
shm_attach(int $key, ?int $size = null, int $permissions = 0666): SysvSharedMemory|false
```

shm_attach() returns an id that can be used to access the System V shared memory with the given key, the first call creates the shared memory segment with size and the optional perm-bits permissions.

A second call to shm_attach() for the same key will return a different SysvSharedMemory instance, but both instances access the same underlying shared memory. size and permissions will be ignored.

### Parameters

A numeric shared memory segment ID

The memory size. If not provided, default to the sysvshm.init_mem in the php.ini, otherwise 10000 bytes.

The optional permission bits. Default to 0666.

### Return Values

Returns a SysvSharedMemory instance on success, or false on failure.

### Changelog

### See Also

- shm_detach() - Disconnects from shared memory segment
- ftok() - Convert a pathname and a project identifier to a System V IPC key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shm-attach.php
