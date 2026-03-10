# SyncMutex::__construct

Source: https://devdocs.io/php/syncmutex.construct

(PECL sync >= 1.0.0)

SyncMutex::__construct — Constructs a new SyncMutex object

### Description

```
public SyncMutex::__construct(string $name = ?)
```

Constructs a named or unnamed countable mutex.

### Parameters

The name of the mutex if this is a named mutex object.

Note:

If the name already exists, it must be able to be opened by the current user that the process is running as or an exception will be thrown with a meaningless error message.

### Return Values

The new SyncMutex object.

### Errors/Exceptions

An exception is thrown if the mutex cannot be created or opened.

### Examples

Example #1 SyncMutex::__construct() named mutex with lock timeout example

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

Example #2 SyncMutex::__construct() unnamed mutex example

```
<?php
$mutex = new SyncMutex();

$mutex->lock();

/* ... */

$mutex->unlock();
?>
```

### See Also

- SyncMutex::lock() - Waits for an exclusive lock
- SyncMutex::unlock() - Unlocks the mutex

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncmutex.construct.php
