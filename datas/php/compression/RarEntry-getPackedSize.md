# RarEntry::getPackedSize

Source: https://devdocs.io/php/rarentry.getpackedsize

(PECL rar >= 0.1)

RarEntry::getPackedSize — Get packed size of the entry

### Description

```
public RarEntry::getPackedSize(): int
```

Get packed size of the archive entry.

Note:

Note that on platforms with 32-bit longs (that includes Windows x64), the maximum size returned is capped at 2 GiB. Check the constant PHP_INT_MAX.

### Parameters

This function has no parameters.

### Return Values

Returns the packed size, or false on error.

### Changelog

### Examples

Example #1 RarEntry::getPackedSize() example

```
<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

echo "Packed size of " . $entry->getName() . " = " . $entry->getPackedSize() . " bytes";

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rarentry.getpackedsize.php
