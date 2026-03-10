# shmop_open

Source: https://devdocs.io/php/function.shmop-open

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

shmop_open — Create or open shared memory block

### Description

```
shmop_open(
 int $key,
 string $mode,
 int $permissions,
 int $size
): Shmop|false
```

shmop_open() can create or open a shared memory block.

### Parameters

System's id for the shared memory block. Can be passed as a decimal or hex.

The flags that you can use:

- "a" for access (sets SHM_RDONLY for shmat) use this flag when you need to open an existing shared memory segment for read only
- "c" for create (sets IPC_CREATE) use this flag when you need to create a new shared memory segment or if a segment with the same key exists, try to open it for read and write
- "w" for read & write access use this flag when you need to read and write to a shared memory segment, use this flag in most cases.
- "n" create a new memory segment (sets IPC_CREATE|IPC_EXCL) use this flag when you want to create a new shared memory segment but if one already exists with the same flag, fail. This is useful for security purposes, using this you can prevent race condition exploits.

The permissions that you wish to assign to your memory segment, those are the same as permission for a file. Permissions need to be passed in octal form, like for example 0644

The size of the shared memory block you wish to create in bytes

Note:

Note: the 3rd and 4th should be entered as 0 if you are opening an existing memory segment.

### Return Values

On success shmop_open() will return a Shmop instance that you can use to access the shared memory segment you've created. false is returned on failure.

### Errors/Exceptions

If mode is invalid, or size is less than or equal to zero, a ValueError is thrown. On other failures, E_WARNING is emitted.

### Changelog

### Examples

Example #1 Create a new shared memory block

```
<?php
$shm_key = ftok(__FILE__, 't');
$shm_id = shmop_open($shm_key, "c", 0644, 100);
?>
```

This example opened a shared memory block with a system id returned by ftok().

### See Also

- shmop_close() - Close shared memory block
- shmop_delete() - Delete shared memory block

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shmop-open.php
