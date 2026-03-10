# sem_acquire

Source: https://devdocs.io/php/function.sem-acquire

(PHP 4, PHP 5, PHP 7, PHP 8)

sem_acquire — Acquire a semaphore

### Description

```
sem_acquire(SysvSemaphore $semaphore, bool $non_blocking = false): bool
```

sem_acquire() by default blocks (if necessary) until the semaphore can be acquired. A process attempting to acquire a semaphore which it has already acquired will block forever if acquiring the semaphore would cause its maximum number of semaphore to be exceeded.

After processing a request, any semaphores acquired by the process but not explicitly released will be released automatically and a warning will be generated.

### Parameters

semaphore is a semaphore obtained from sem_get().

Specifies if the process shouldn't wait for the semaphore to be acquired. If set to true, the call will return false immediately if a semaphore cannot be immediately acquired.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- sem_get() - Get a semaphore id
- sem_release() - Release a semaphore

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sem-acquire.php
