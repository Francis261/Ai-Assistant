# RarEntry::getMethod

Source: https://devdocs.io/php/rarentry.getmethod

(PECL rar >= 0.1)

RarEntry::getMethod — Get pack method of the entry

### Description

```
public RarEntry::getMethod(): int
```

RarEntry::getMethod() returns number of the method used when adding current archive entry.

### Parameters

This function has no parameters.

### Return Values

Returns the method number or false on error.

### Examples

Example #1 RarEntry::getMethod() example

```
<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

echo "Method number: " . $entry->getMethod();

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rarentry.getmethod.php
