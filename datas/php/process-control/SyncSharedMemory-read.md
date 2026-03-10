# SyncSharedMemory::read

Source: https://devdocs.io/php/syncsharedmemory.read

(PECL sync >= 1.1.0)

SyncSharedMemory::read — Copy data from named shared memory

### Description

```
public SyncSharedMemory::read(int $start = 0, int $length = ?)
```

Copies data from named shared memory.

### Parameters

The start/offset, in bytes, to begin reading.

Note:

If the value is negative, the starting position will begin at the specified number of bytes from the end of the shared memory segment.

The number of bytes to read.

Note:

If unspecified, reading will stop at the end of the shared memory segment.

If the value is negative, reading will stop the specified number of bytes from the end of the shared memory segment.

### Return Values

A string containing the data read from shared memory.

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

$result = $mem->write("report.txt");

$result = $mem->read(3, -4);
var_dump($result);
?>
```

The above example will output something similar to:

```
string(3) "ort"
```

### See Also

- SyncSharedMemory::__construct() - Constructs a new SyncSharedMemory object
- SyncSharedMemory::first() - Check to see if the object is the first instance system-wide of named shared memory
- SyncSharedMemory::write() - Copy data to named shared memory
- SyncSharedMemory::read()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncsharedmemory.read.php
