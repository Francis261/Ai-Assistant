# RarEntry::getName

Source: https://devdocs.io/php/rarentry.getname

(PECL rar >= 0.1)

RarEntry::getName — Get name of the entry

### Description

```
public RarEntry::getName(): string
```

Returns the name (with path) of the archive entry.

### Parameters

This function has no parameters.

### Return Values

Returns the entry name as a string, or false on error.

### Changelog

### Examples

Example #1 RarEntry::getName() example

```
<?php

//this example is safe even in pages not encoded in UTF-8
//for those encoded in UTF-8, the call to mb_convert_encoding is unnecessary

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

echo "Entry name: " . mb_convert_encoding(
    htmlentities(
        $entry->getName(),
        ENT_COMPAT,
        "UTF-8"
    ),
    "HTML-ENTITIES",
    "UTF-8"
);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rarentry.getname.php
