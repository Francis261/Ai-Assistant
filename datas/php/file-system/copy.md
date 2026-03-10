# copy

Source: https://devdocs.io/php/function.copy

(PHP 4, PHP 5, PHP 7, PHP 8)

copy — Copies file

### Description

```
copy(string $from, string $to, ?resource $context = null): bool
```

Makes a copy of the file from to to.

If you wish to move a file, use the rename() function.

### Parameters

Path to the source file.

The destination path. If to is a URL, the copy operation may fail if the wrapper does not support overwriting of existing files.

If the destination file already exists, it will be overwritten.

A valid context resource created with stream_context_create().

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 copy() example

```
<?php
$file = 'example.txt';
$newfile = 'example.txt.bak';

if (!copy($file, $newfile)) {
    echo "failed to copy $file...\n";
}
?>
```

### See Also

- move_uploaded_file() - Moves an uploaded file to a new location
- rename() - Renames a file or directory
- The section of the manual about handling file uploads

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.copy.php
