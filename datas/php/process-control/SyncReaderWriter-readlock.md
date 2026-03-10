# SyncReaderWriter::readlock

Source: https://devdocs.io/php/syncreaderwriter.readlock

(PECL sync >= 1.0.0)

SyncReaderWriter::readlock — Waits for a read lock

### Description

```
public SyncReaderWriter::readlock(int $wait = -1): bool
```

Obtains a read lock on a SyncReaderWriter object.

### Parameters

The number of milliseconds to wait for a lock. A value of -1 is infinite.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncReaderWriter::readlock() example

```
<?php
$readwrite = new SyncReaderWriter("FileCacheLock");
$readwrite->readlock();
/* ... */
$readwrite->readunlock();
?>
```

### See Also

- SyncReaderWriter::readunlock() - Releases a read lock

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncreaderwriter.readlock.php
