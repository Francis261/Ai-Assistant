# RarEntry::getUnpackedSize

Source: https://devdocs.io/php/rarentry.getunpackedsize

(PECL rar >= 0.1)

RarEntry::getUnpackedSize — Get unpacked size of the entry

### Description

```
public RarEntry::getUnpackedSize(): int
```

Get unpacked size of the archive entry.

Note:

Note that on platforms with 32-bit longs (that includes Windows x64), the maximum size returned is capped at 2 GiB. Check the constant PHP_INT_MAX.

### Parameters

This function has no parameters.

### Return Values

Returns the unpacked size, or false on error.

### Changelog

### Return Values

Example #1 RarEntry::getUnpackedSize() example

```
<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

echo "Unpacked size of " . $entry->getName() . " = " . $entry->getPackedSize() . " bytes";

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rarentry.getunpackedsize.php
