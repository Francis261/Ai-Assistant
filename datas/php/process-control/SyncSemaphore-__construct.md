# SyncSemaphore::__construct

Source: https://devdocs.io/php/syncsemaphore.construct

(PECL sync >= 1.0.0)

SyncSemaphore::__construct — Constructs a new SyncSemaphore object

### Description

```
public SyncSemaphore::__construct(string $name = ?, int $initialval = 1, bool $autounlock = true)
```

Constructs a named or unnamed semaphore.

### Parameters

The name of the semaphore if this is a named semaphore object.

Note:

If the name already exists, it must be able to be opened by the current user that the process is running as or an exception will be thrown with a meaningless error message.

The initial value of the semaphore. This is the number of locks that may be obtained.

Specifies whether or not to automatically unlock the semaphore at the conclusion of the PHP script.

If an object is: A named semaphore with an autounlock of false, the object is locked, and the PHP script concludes before the object is unlocked, then the underlying semaphore will end up in an inconsistent state.

### Return Values

The new SyncSemaphore object.

### Errors/Exceptions

An exception is thrown if the semaphore cannot be created or opened.

### Examples

Example #1 SyncSemaphore::__construct() example

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
- SyncSemaphore::unlock() - Increases the count of the semaphore

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncsemaphore.construct.php
