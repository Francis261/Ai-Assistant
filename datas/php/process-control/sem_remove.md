# sem_remove

Source: https://devdocs.io/php/function.sem-remove

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

sem_remove — Remove a semaphore

### Description

```
sem_remove(SysvSemaphore $semaphore): bool
```

sem_remove() removes the given semaphore.

After removing the semaphore, it is no longer accessible.

### Parameters

A semaphore as returned by sem_get().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- sem_get() - Get a semaphore id
- sem_release() - Release a semaphore
- sem_acquire() - Acquire a semaphore

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sem-remove.php
