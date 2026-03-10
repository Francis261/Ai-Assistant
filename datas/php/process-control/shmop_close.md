# shmop_close

Source: https://devdocs.io/php/function.shmop-close

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

shmop_close — Close shared memory block

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 shmop_close(Shmop $shmop): void
```

Note:

This function has no effect. Prior to PHP 8.0.0, this function was used to close the resource.

shmop_close() is used to close a shared memory block.

### Parameters

The shared memory block resource created by shmop_open()

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 Closing shared memory block

```
<?php
shmop_close($shm_id);
?>
```

This example will close shared memory block identified by $shm_id.

### See Also

- shmop_open() - Create or open shared memory block

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shmop-close.php
