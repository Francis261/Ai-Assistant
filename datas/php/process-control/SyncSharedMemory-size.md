# SyncSharedMemory::size

Source: https://devdocs.io/php/syncsharedmemory.size

(PECL sync >= 1.1.0)

SyncSharedMemory::size — Returns the size of the named shared memory

### Description

```
public SyncSharedMemory::size(): int
```

Retrieves the shared memory size of a SyncSharedMemory object.

### Parameters

This function has no parameters.

### Return Values

An integer containing the size of the shared memory. This will be the same size that was passed to the constructor.

### Examples

Example #1 SyncSharedMemory::size() example

```
<?php
$mem = new SyncSharedMemory("AppReportName", 1024);
var_dump($mem->size());
?>
```

The above example will output something similar to:

```
int(1024)
```

### See Also

- SyncSharedMemory::__construct() - Constructs a new SyncSharedMemory object
- SyncSharedMemory::write() - Copy data to named shared memory
- SyncSharedMemory::read() - Copy data from named shared memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncsharedmemory.size.php
