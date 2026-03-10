# sem_get

Source: https://devdocs.io/php/function.sem-get

(PHP 4, PHP 5, PHP 7, PHP 8)

sem_get — Get a semaphore id

### Description

```
sem_get(
 int $key,
 int $max_acquire = 1,
 int $permissions = 0666,
 bool $auto_release = true
): SysvSemaphore|false
```

sem_get() returns an id that can be used to access the System V semaphore with the given key.

A second call to sem_get() for the same key will return a different semaphore identifier, but both identifiers access the same underlying semaphore.

If key is 0, a new private semaphore is created for each call to sem_get().

### Parameters

The number of processes that can acquire the semaphore simultaneously is set to max_acquire.

The semaphore permissions. Actually this value is set only if the process finds it is the only process currently attached to the semaphore.

Specifies if the semaphore should be automatically released on request shutdown.

### Return Values

Returns a positive semaphore identifier on success, or false on error.

### Changelog

### Notes

When using sem_get() to access a semaphore created outside PHP, note that the semaphore must have been created as a set of 3 semaphores (for example, by specifying 3 as the nsems parameter when calling the C semget() function), otherwise PHP will be unable to access the semaphore.

### See Also

- sem_acquire() - Acquire a semaphore
- sem_release() - Release a semaphore
- ftok() - Convert a pathname and a project identifier to a System V IPC key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sem-get.php
