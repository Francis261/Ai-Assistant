# shmop_read

Source: https://devdocs.io/php/function.shmop-read

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

shmop_read — Read data from shared memory block

### Description

```
shmop_read(Shmop $shmop, int $offset, int $size): string
```

shmop_read() will read a string from shared memory block.

### Parameters

The shared memory block identifier created by shmop_open()

Offset from which to start reading; must be greater than or equal to zero and less than or equal to the actual size of the shared memory segment.

The number of bytes to read; must be greater than or equal to zero, and the sum of offset and size must be less than or equal to the actual size of the shared memory segment. 0 reads shmop_size($shmid) - $start bytes.

### Return Values

Returns the data.

### Errors/Exceptions

If offset or size are out of range, a ValueError is thrown.

### Changelog

### Examples

Example #1 Reading shared memory block

```
<?php
$shm_data = shmop_read($shm_id, 0, 50);
?>
```

This example will read 50 bytes from shared memory block and place the data inside $shm_data.

### See Also

- shmop_write() - Write data into shared memory block

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shmop-read.php
