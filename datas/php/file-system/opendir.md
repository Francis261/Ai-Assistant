# opendir

Source: https://devdocs.io/php/function.opendir

(PHP 4, PHP 5, PHP 7, PHP 8)

opendir — Open directory handle

### Description

```
opendir(string $directory, ?resource $context = null): resource|false
```

Opens up a directory handle to be used in subsequent closedir(), readdir(), and rewinddir() calls.

### Parameters

### Return Values

Returns a directory handle on success, or false on failure

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

This may happen if directory is not a valid directory, the directory can not be opened due to permission restrictions, or due to filesystem errors.

### Changelog

### Examples

Example #1 List all entries in a directory, skipping the special . and .. directories

Because file and directory names can be strings that PHP considers "falsy" (e.g. a directory named "0") and readdir() returns false when it has read all entries in a directory one needs to use the === comparison operator to properly distinguish between a directory entry whose name is "falsy" and having read all entries of the directory.

```
<?php

if ($handle = opendir('/path/to/files')) {
    echo "Entries:\n";

    /* Correctly handling directory entries that may be considered falsy */
    while (false !== ($entry = readdir($handle))) {
        if ($entry === '.' || $entry === '..') {
            continue;
        }
        echo "$entry\n";
    }

    closedir($handle);
}
?>
```

The above example will output something similar to:

```
Entries:
base
en
fr
output.md
test.php
```

### See Also

- readdir() - Read entry from directory handle
- rewinddir() - Rewind directory handle
- closedir() - Close directory handle
- dir() - Return an instance of the Directory class
- is_dir() - Tells whether the filename is a directory
- glob() - Find pathnames matching a pattern
- scandir() - List files and directories inside the specified path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.opendir.php
