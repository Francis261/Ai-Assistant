# SyncSemaphore::lock

Source: https://devdocs.io/php/syncsemaphore.lock

(PECL sync >= 1.0.0)

SyncSemaphore::lock — Decreases the count of the semaphore or waits

### Description

```
public SyncSemaphore::lock(int $wait = -1): bool
```

Decreases the count of a SyncSemaphore object or waits until the semaphore becomes non-zero.

### Parameters

The number of milliseconds to wait for the semaphore. A value of -1 is infinite.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncSemaphore::lock() example

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

- SyncSemaphore::unlock() - Increases the count of the semaphore

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncsemaphore.lock.php
