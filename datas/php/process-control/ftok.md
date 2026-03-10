# ftok

Source: https://devdocs.io/php/function.ftok

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

ftok — Convert a pathname and a project identifier to a System V IPC key

### Description

```
ftok(string $filename, string $project_id): int
```

The function converts the filename of an existing accessible file and a project identifier into an integer for use with for example shmop_open() and other System V IPC keys.

### Parameters

Path to an accessible file.

Project identifier. This must be a one character string.

### Return Values

On success the return value will be the created key value, otherwise -1 is returned.

### See Also

- shmop_open() - Create or open shared memory block
- sem_get() - Get a semaphore id

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftok.php
