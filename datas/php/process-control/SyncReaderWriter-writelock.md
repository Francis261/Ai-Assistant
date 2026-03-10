# SyncReaderWriter::writelock

Source: https://devdocs.io/php/syncreaderwriter.writelock

(PECL sync >= 1.0.0)

SyncReaderWriter::writelock — Waits for an exclusive write lock

### Description

```
public SyncReaderWriter::writelock(int $wait = -1): bool
```

Obtains an exclusive write lock on a SyncReaderWriter object.

### Parameters

The number of milliseconds to wait for a lock. A value of -1 is infinite.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncReaderWriter::writelock() example

```
<?php
$readwrite = new SyncReaderWriter("FileCacheLock");
$readwrite->writelock();
/* ... */
$readwrite->writeunlock();
?>
```

### See Also

- SyncReaderWriter::writeunlock() - Releases a write lock

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncreaderwriter.writelock.php
