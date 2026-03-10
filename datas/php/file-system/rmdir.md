# rmdir

Source: https://devdocs.io/php/function.rmdir

(PHP 4, PHP 5, PHP 7, PHP 8)

rmdir — Removes directory

### Description

```
rmdir(string $directory, ?resource $context = null): bool
```

Attempts to remove the directory named by directory. The directory must be empty, and the relevant permissions must permit this. A E_WARNING level error will be generated on failure.

### Parameters

Path to the directory.

A context stream resource.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 rmdir() example

```
<?php
if (!is_dir('examples')) {
    mkdir('examples');
}

rmdir('examples');
?>
```

### See Also

- is_dir() - Tells whether the filename is a directory
- mkdir() - Makes directory
- unlink() - Deletes a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.rmdir.php
