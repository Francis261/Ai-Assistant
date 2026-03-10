# SyncReaderWriter::writeunlock

Source: https://devdocs.io/php/syncreaderwriter.writeunlock

(PECL sync >= 1.0.0)

SyncReaderWriter::writeunlock — Releases a write lock

### Description

```
public SyncReaderWriter::writeunlock(): bool
```

Releases a write lock on a SyncReaderWriter object.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncReaderWriter::writeunlock() example

```
<?php
$readwrite = new SyncReaderWriter("FileCacheLock");
$readwrite->writelock();
/* ... */
$readwrite->writeunlock();
?>
```

### See Also

- SyncReaderWriter::writelock() - Waits for an exclusive write lock

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncreaderwriter.writeunlock.php
