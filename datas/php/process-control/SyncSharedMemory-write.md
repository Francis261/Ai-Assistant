# SyncSharedMemory::write

Source: https://devdocs.io/php/syncsharedmemory.write

(PECL sync >= 1.1.0)

SyncSharedMemory::write — Copy data to named shared memory

### Description

```
public SyncSharedMemory::write(string $string = ?, int $start = 0)
```

Copies data to named shared memory.

### Parameters

The data to write to shared memory.

Note:

If the size of the data exceeds the size of the shared memory, the number of bytes written returned will be less than the length of the input.

The start/offset, in bytes, to begin writing.

Note:

If the value is negative, the starting position will begin at the specified number of bytes from the end of the shared memory segment.

### Return Values

An integer containing the number of bytes written to shared memory.

### Examples

Example #1 SyncSharedMemory::write() example

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
var_dump($result);

$result = $mem->write("report.txt", -3);
var_dump($result);
?>
```

The above example will output something similar to:

```
int(10)
int(3)
```

### See Also

- SyncSharedMemory::__construct() - Constructs a new SyncSharedMemory object
- SyncSharedMemory::first() - Check to see if the object is the first instance system-wide of named shared memory
- SyncSharedMemory::write()
- SyncSharedMemory::read() - Copy data from named shared memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncsharedmemory.write.php
