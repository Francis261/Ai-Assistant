# shmop_size

Source: https://devdocs.io/php/function.shmop-size

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

shmop_size — Get size of shared memory block

### Description

```
shmop_size(Shmop $shmop): int
```

shmop_size() is used to get the size, in bytes of the shared memory block.

### Parameters

The shared memory block identifier created by shmop_open()

### Return Values

Returns an int, which represents the number of bytes the shared memory block occupies.

### Changelog

### Examples

Example #1 Getting the size of the shared memory block

```
<?php
$shm_size = shmop_size($shm_id);
?>
```

This example will put the size of shared memory block identified by $shm_id into $shm_size.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shmop-size.php
