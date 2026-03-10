# SplFileObject::flock

Source: https://devdocs.io/php/splfileobject.flock

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::flock — Portable file locking

### Description

```
public SplFileObject::flock(int $operation, int &$wouldBlock = null): bool
```

Locks or unlocks the file in the same portable way as flock().

### Parameters

operation is one of the following:

- LOCK_SH to acquire a shared lock (reader).
- LOCK_EX to acquire an exclusive lock (writer).
- LOCK_UN to release a lock (shared or exclusive).

It is also possible to add LOCK_NB as a bitmask to one of the above operations, if flock() should not block during the locking attempt.

Set to true if the lock would block (EWOULDBLOCK errno condition).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SplFileObject::flock() example

```
<?php
$file = new SplFileObject("/tmp/lock.txt", "w");
if ($file->flock(LOCK_EX)) { // do an exclusive lock
    $file->ftruncate(0);     // truncate file
    $file->fwrite("Write something here\n");
    $file->flock(LOCK_UN);   // release the lock    
} else {
    echo "Couldn't get the lock!";
}
?>
```

### See Also

- flock() - Portable advisory file locking

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.flock.php
