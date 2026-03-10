# SyncMutex::unlock

Source: https://devdocs.io/php/syncmutex.unlock

(PECL sync >= 1.0.0)

SyncMutex::unlock — Unlocks the mutex

### Description

```
public SyncMutex::unlock(bool $all = false): bool
```

Decreases the internal counter of a SyncMutex object. When the internal counter reaches zero, the actual lock on the object is released.

### Parameters

Specifies whether or not to set the internal counter to zero and therefore release the lock.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncMutex::unlock() example

```
<?php
$mutex = new SyncMutex("UniqueName");

$mutex->lock();

/* ... */

$mutex->unlock();
?>
```

### See Also

- SyncMutex::lock() - Waits for an exclusive lock

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncmutex.unlock.php
