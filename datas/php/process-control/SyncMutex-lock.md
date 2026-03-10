# SyncMutex::lock

Source: https://devdocs.io/php/syncmutex.lock

(PECL sync >= 1.0.0)

SyncMutex::lock — Waits for an exclusive lock

### Description

```
public SyncMutex::lock(int $wait = -1): bool
```

Obtains an exclusive lock on a SyncMutex object. If the lock is already acquired, then this increments an internal counter.

### Parameters

The number of milliseconds to wait for the exclusive lock. A value of -1 is infinite.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncMutex::lock() example

```
<?php
$mutex = new SyncMutex("UniqueName");

if (!$mutex->lock(3000))
{
    echo "Unable to lock mutex.";

    exit();
}

/* ... */

$mutex->unlock();
?>
```

### See Also

- SyncMutex::unlock() - Unlocks the mutex

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncmutex.lock.php
