# shmop_write

Source: https://devdocs.io/php/function.shmop-write

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

shmop_write — Write data into shared memory block

### Description

```
shmop_write(Shmop $shmop, string $data, int $offset): int
```

shmop_write() will write a string into shared memory block.

### Parameters

The shared memory block identifier created by shmop_open()

A string to write into shared memory block

Specifies where to start writing data inside the shared memory segment. The offset must be greater than or equal to zero and less than or equal to the actual size of the shared memory segment.

### Return Values

The size of the written data.

### Errors/Exceptions

If offset is out of range, or a read-only shared memory segment should be written to, a ValueError is thrown.

### Changelog

### Examples

Example #1 Writing to shared memory block

```
<?php
$shm_bytes_written = shmop_write($shm_id, $my_string, 0);
?>
```

This example will write data inside $my_string into shared memory block, $shm_bytes_written will contain the number of bytes written.

### See Also

- shmop_read() - Read data from shared memory block

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shmop-write.php
