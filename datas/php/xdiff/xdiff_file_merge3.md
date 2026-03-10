# xdiff_file_merge3

Source: https://devdocs.io/php/function.xdiff-file-merge3

(PECL xdiff >= 0.2.0)

xdiff_file_merge3 — Merge 3 files into one

### Description

```
xdiff_file_merge3(
 string $old_file,
 string $new_file1,
 string $new_file2,
 string $dest
): mixed
```

Merges three files into one and stores the result in a file dest. The old_file is an original version while new_file1 and new_file2 are modified versions of an original.

### Parameters

Path to the first file. It acts as "old" file.

Path to the second file. It acts as modified version of old_file.

Path to the third file. It acts as modified version of old_file.

Path of the resulting file, containing merged changed from both new_file1 and new_file2.

### Return Values

Returns true if merge was successful, string with rejected chunks if it was not or false if an internal error happened.

### Examples

Example #1 xdiff_file_merge3() example

The following code merges three files into one.

```
<?php
$old_version = 'original_script.php';
$fix1 = 'script_with_fix1.php';
$fix2 = 'script_with_fix2.php';

$errors = xdiff_file_merge3($old_version, $fix1, $fix2, 'fixed_script.php');
if (is_string($errors)) {
    echo "Rejects:\n";
    echo $errors;
}
?>
```

### See Also

- xdiff_string_merge3() - Merge 3 strings into one

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-file-merge3.php
