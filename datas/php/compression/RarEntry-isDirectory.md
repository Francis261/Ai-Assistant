# RarEntry::isDirectory

Source: https://devdocs.io/php/rarentry.isdirectory

(PECL rar >= 2.0.0)

RarEntry::isDirectory — Test whether an entry represents a directory

### Description

```
public RarEntry::isDirectory(): bool
```

Tests whether the current entry is a directory.

### Parameters

This function has no parameters.

### Return Values

Returns true if this entry is a directory and false otherwise.

### Notes

This function is only available starting with version 2.0.0, but one can also test whether an entry is a directory by checking the entry attributes, like this (only works for files compressed in RAR for Windows or Unix):

```
<?php
//...
//Open file, get entry and store in variable $e...
//...

$isDirectory = (bool) ((($e->getHostOs() == RAR_HOST_WIN32) && ($e->getAttr() & 0x10)) ||
    (($e->getHostOs() == RAR_HOST_UNIX) && (($e->getAttr() & 0xf000) == 0x4000)));
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rarentry.isdirectory.php
