# sem_release

Source: https://devdocs.io/php/function.sem-release

(PHP 4, PHP 5, PHP 7, PHP 8)

sem_release — Release a semaphore

### Description

```
sem_release(SysvSemaphore $semaphore): bool
```

sem_release() releases the semaphore if it is currently acquired by the calling process, otherwise a warning is generated.

After releasing the semaphore, sem_acquire() may be called to re-acquire it.

### Parameters

A Semaphore as returned by sem_get().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- sem_get() - Get a semaphore id
- sem_acquire() - Acquire a semaphore

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sem-release.php
