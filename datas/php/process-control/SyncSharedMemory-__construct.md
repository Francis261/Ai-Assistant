# SyncSharedMemory::__construct

Source: https://devdocs.io/php/syncsharedmemory.construct

(PECL sync >= 1.1.0)

SyncSharedMemory::__construct — Constructs a new SyncSharedMemory object

### Description

```
public SyncSharedMemory::__construct(string $name, int $size)
```

Constructs a named shared memory object.

### Parameters

The name of the shared memory object.

Note:

If the name already exists, it must be able to be opened by the current user that the process is running as or an exception will be thrown with a meaningless error message.

The size, in bytes, of shared memory to reserve.

Note:

The amount of memory cannot be resized later. Request sufficient storage up front.

### Return Values

The new SyncSharedMemory object.

### Errors/Exceptions

An exception is thrown if the shared memory object cannot be created or opened.

### Examples

Example #1 SyncSharedMemory::__construct() example

```
<?php
// You will probably need to protect shared memory with other synchronization objects.
// Shared memory goes away when the last reference to it disappears.
$mem = new SyncSharedMemory("AppReportName", 1024);
if ($mem->first())
{
    // Do first time initialization work here.
}

$result = $mem->write(json_encode(array("name" => "my_report.txt")));
?>
```

### See Also

- SyncSharedMemory::first() - Check to see if the object is the first instance system-wide of named shared memory
- SyncSharedMemory::size() - Returns the size of the named shared memory
- SyncSharedMemory::write() - Copy data to named shared memory
- SyncSharedMemory::read() - Copy data from named shared memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncsharedmemory.construct.php
