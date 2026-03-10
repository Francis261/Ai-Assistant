# xdiff_file_diff

Source: https://devdocs.io/php/function.xdiff-file-diff

(PECL xdiff >= 0.2.0)

xdiff_file_diff — Make unified diff of two files

### Description

```
xdiff_file_diff(
 string $old_file,
 string $new_file,
 string $dest,
 int $context = 3,
 bool $minimal = false
): bool
```

Makes an unified diff containing differences between old_file and new_file and stores it in dest file. The resulting file is human-readable. An optional context parameter specifies how many lines of context should be added around each change. Setting minimal parameter to true will result in outputting the shortest patch file possible (can take a long time).

### Parameters

Path to the first file. This file acts as "old" file.

Path to the second file. This file acts as "new" file.

Path of the resulting patch file.

Indicates how many lines of context you want to include in diff result.

Set this parameter to true if you want to minimalize size of the result (can take a long time).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 xdiff_file_diff() example

The following code makes unified diff of two php files with context length of 2.

```
<?php
$old_version = 'my_script.php';
$new_version = 'my_new_script.php';

xdiff_file_diff($old_version, $new_version, 'my_script.diff', 2);
?>
```

### Notes

Note:

This function doesn't work well with binary files. To make diff of binary files use xdiff_file_bdiff()/xdiff_file_rabdiff() function.

### See Also

- xdiff_file_patch() - Patch a file with an unified diff

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-file-diff.php
