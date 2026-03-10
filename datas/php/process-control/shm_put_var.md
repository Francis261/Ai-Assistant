# shm_put_var

Source: https://devdocs.io/php/function.shm-put-var

(PHP 4, PHP 5, PHP 7, PHP 8)

shm_put_var — Inserts or updates a variable in shared memory

### Description

```
shm_put_var(SysvSharedMemory $shm, int $key, mixed $value): bool
```

shm_put_var() inserts or updates the value with the given key.

Warnings (E_WARNING level) will be issued if shm is not a valid SysV shared memory index or if there was not enough shared memory remaining to complete your request.

### Parameters

A shared memory segment obtained from shm_attach().

The variable key.

The variable. All variable types that serialize() supports may be used: generally this means all types except for resources and some internal objects that cannot be serialized.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- shm_get_var() - Returns a variable from shared memory
- shm_has_var() - Check whether a specific entry exists

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shm-put-var.php
