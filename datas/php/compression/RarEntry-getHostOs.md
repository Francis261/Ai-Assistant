# RarEntry::getHostOs

Source: https://devdocs.io/php/rarentry.gethostos

(PECL rar >= 0.1)

RarEntry::getHostOs — Get entry host OS

### Description

```
public RarEntry::getHostOs(): int
```

Returns the code of the host OS of the archive entry.

### Parameters

This function has no parameters.

### Return Values

Returns the code of the host OS, or false on error.

### Examples

Example #1 RarEntry::getHostOs() example (version >= 2.0.0)

```
<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

switch ($entry->getHostOs()) {
    case RarEntry::HOST_MSDOS:
        echo "MS-DOS\n";
        break;
    case RarEntry::HOST_OS2:
        echo "OS2\n";
        break;
    case RarEntry::HOST_WIN32:
        echo "Win32\n";
        break;
    case RarEntry::HOST_MACOS:
        echo "MacOS\n";
        break;
    case RarEntry::HOST_UNIX:
        echo "Unix/Linux\n";
        break;
    case RarEntry::HOST_BEOS:
        echo "BeOS\n";
        break;
}

?>
```

Example #2 RarEntry::getHostOs() example (version <= 1.0.0)

```
<?php

$rar_file = rar_open('example.rar') or die("Failed to open Rar archive");

$entry = rar_entry_get($rar_file, 'Dir/file.txt') or die("Failed to find such entry");

switch ($entry->getHostOs()) {
    case RAR_HOST_MSDOS:
        echo "MS-DOS\n";
        break;
    case RAR_HOST_OS2:
        echo "OS2\n";
        break;
    case RAR_HOST_WIN32:
        echo "Win32\n";
        break;
    case RAR_HOST_MACOS:
        echo "MacOS\n";
        break;
    case RAR_HOST_UNIX:
        echo "Unix/Linux\n";
        break;
    case RAR_HOST_BEOS:
        echo "BeOS\n";
        break;
}

?>
```

### See Also

- RarEntry::extract() - Extract entry from the archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rarentry.gethostos.php
