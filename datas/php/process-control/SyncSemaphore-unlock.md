# SyncSemaphore::unlock

Source: https://devdocs.io/php/syncsemaphore.unlock

(PECL sync >= 1.0.0)

SyncSemaphore::unlock — Increases the count of the semaphore

### Description

```
public SyncSemaphore::unlock(int &$prevcount = ?): bool
```

Increases the count of a SyncSemaphore object.

### Parameters

Returns the previous count of the semaphore.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncSemaphore::unlock() example

```
<?php
$semaphore = new SyncSemaphore("LimitedResource_2clients", 2);

if (!$semaphore->lock(3000))
{
    echo "Unable to lock semaphore.";

    exit();
}

/* ... */

$semaphore->unlock();
?>
```

### See Also

- SyncSemaphore::lock() - Decreases the count of the semaphore or waits

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncsemaphore.unlock.php
