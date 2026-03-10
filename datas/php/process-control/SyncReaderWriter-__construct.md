# SyncReaderWriter::__construct

Source: https://devdocs.io/php/syncreaderwriter.construct

(PECL sync >= 1.0.0)

SyncReaderWriter::__construct — Constructs a new SyncReaderWriter object

### Description

```
public SyncReaderWriter::__construct(string $name = ?, int $autounlock = 1)
```

Constructs a named or unnamed reader-writer object.

### Parameters

The name of the reader-writer if this is a named reader-writer object.

Note:

If the name already exists, it must be able to be opened by the current user that the process is running as or an exception will be thrown with a meaningless error message.

Note: On Windows, name must not contain backslashes.

Specifies whether or not to automatically unlock the reader-writer at the conclusion of the PHP script.

If an object is: A named reader-writer with an autounlock of FALSE, the object is locked for either reading or writing, and the PHP script concludes before the object is unlocked, then the underlying objects will end up in an inconsistent state.

### Return Values

The new SyncReaderWriter object.

### Errors/Exceptions

An exception is thrown if the reader-writer cannot be created or opened.

### Examples

Example #1 SyncReaderWriter::__construct() example

```
<?php
$readwrite = new SyncReaderWriter("FileCacheLock");
$readwrite->readlock();
/* ... */
$readwrite->readunlock();

$readwrite->writelock();
/* ... */
$readwrite->writeunlock();
?>
```

### See Also

- SyncReaderWriter::readlock() - Waits for a read lock
- SyncReaderWriter::readunlock() - Releases a read lock
- SyncReaderWriter::writelock() - Waits for an exclusive write lock
- SyncReaderWriter::writeunlock() - Releases a write lock

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncreaderwriter.construct.php
