# xdiff_file_diff_binary

Source: https://devdocs.io/php/function.xdiff-file-diff-binary

(PECL xdiff >= 0.2.0)

xdiff_file_diff_binary — Alias of xdiff_file_bdiff()

### Description

```
xdiff_file_diff_binary(string $old_file, string $new_file, string $dest): bool
```

Makes a binary diff of two files and stores the result in a patch file. This function works with both text and binary files. Resulting patch file can be later applied using xdiff_file_bpatch().

Starting with version 1.5.0 this function is an alias of xdiff_file_bdiff().

### Parameters

Path to the first file. This file acts as "old" file.

Path to the second file. This file acts as "new" file.

Path of the resulting patch file. Resulting file contains differences between "old" and "new" files. It is in binary format and is human-unreadable.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 xdiff_file_diff_binary() example

The following code makes binary diff of two archives.

```
<?php
$old_version = 'my_script_1.0.tgz';
$new_version = 'my_script_1.1.tgz';

xdiff_file_diff_binary($old_version, $new_version, 'my_script.bdiff');
?>
```

### Notes

Note:

Both files will be loaded into memory so ensure that your memory_limit is set high enough.

### See Also

- xdiff_file_bdiff() - Make binary diff of two files
- xdiff_file_bpatch() - Patch a file with a binary diff

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-file-diff-binary.php
