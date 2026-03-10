# RarEntry::getVersion

Source: https://devdocs.io/php/rarentry.getversion

(PECL rar >= 0.1)

RarEntry::getVersion — Get minimum version of RAR program required to unpack the entry

### Description

```
public RarEntry::getVersion(): int
```

Returns minimum version of RAR program (e.g. WinRAR) required to unpack the entry. It is encoded as 10 * major version + minor version.

### Parameters

This function has no parameters.

### Return Values

Returns the version or false on error.

### Examples

Example #1 RarEntry::getVersion() example

```
<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

echo "Rar version required for unpacking: " . $entry->getVersion();

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rarentry.getversion.php
