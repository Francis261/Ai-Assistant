# shmop_delete

Source: https://devdocs.io/php/function.shmop-delete

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

shmop_delete — Delete shared memory block

### Description

```
shmop_delete(Shmop $shmop): bool
```

shmop_delete() is used to delete a shared memory block.

### Parameters

The shared memory block resource created by shmop_open()

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Deleting shared memory block

```
<?php
shmop_delete($shm_id);
?>
```

This example will delete shared memory block identified by $shm_id.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shmop-delete.php
