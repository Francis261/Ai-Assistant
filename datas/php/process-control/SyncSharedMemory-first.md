# SyncSharedMemory::first

Source: https://devdocs.io/php/syncsharedmemory.first

(PECL sync >= 1.1.0)

SyncSharedMemory::first — Check to see if the object is the first instance system-wide of named shared memory

### Description

```
public SyncSharedMemory::first(): bool
```

Retrieves the system-wide first instance status of a SyncSharedMemory object.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncSharedMemory::first() example

```
<?php
$mem = new SyncSharedMemory("AppReportName", 1024);
if ($mem->first())
{
    // Do first time initialization work here.
}

var_dump($mem->first());

$mem2 = new SyncSharedMemory("AppReportName", 1024);

var_dump($mem2->first());
?>
```

The above example will output something similar to:

```
bool(true)
bool(false)
```

### See Also

- SyncSharedMemory::write() - Copy data to named shared memory
- SyncSharedMemory::read() - Copy data from named shared memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncsharedmemory.first.php
