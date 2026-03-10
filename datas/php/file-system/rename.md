# rename

Source: https://devdocs.io/php/function.rename

(PHP 4, PHP 5, PHP 7, PHP 8)

rename — Renames a file or directory

### Description

```
rename(string $from, string $to, ?resource $context = null): bool
```

Attempts to rename from to to, moving it between directories if necessary. If renaming a file and to exists, it will be overwritten. If renaming a directory and to exists, this function will emit a warning.

### Parameters

The old name.

Note:

The wrapper used in from must match the wrapper used in to.

The new name.

Note: On Windows, if to already exists, it must be writable. Otherwise rename() fails and issues E_WARNING.

A context stream resource.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Example with rename()

```
<?php
rename("/tmp/tmp_file.txt", "/home/user/login/docs/my_file.txt");
?>
```

### See Also

- copy() - Copies file
- unlink() - Deletes a file
- move_uploaded_file() - Moves an uploaded file to a new location

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.rename.php
