# SyncReaderWriter::readunlock

Source: https://devdocs.io/php/syncreaderwriter.readunlock

(PECL sync >= 1.0.0)

SyncReaderWriter::readunlock — Releases a read lock

### Description

```
public SyncReaderWriter::readunlock(): bool
```

Releases a read lock on a SyncReaderWriter object.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncReaderWriter::readunlock() example

```
<?php
$readwrite = new SyncReaderWriter("FileCacheLock");
$readwrite->readlock();
/* ... */
$readwrite->readunlock();
?>
```

### See Also

- SyncReaderWriter::readlock() - Waits for a read lock

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncreaderwriter.readunlock.php
