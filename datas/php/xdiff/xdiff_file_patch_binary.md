# xdiff_file_patch_binary

Source: https://devdocs.io/php/function.xdiff-file-patch-binary

(PECL xdiff >= 0.2.0)

xdiff_file_patch_binary — Alias of xdiff_file_bpatch()

### Description

```
xdiff_file_patch_binary(string $file, string $patch, string $dest): bool
```

Patches a file with a binary patch and stores the result in a file dest. This function accepts patches created both via xdiff_file_bdiff() or xdiff_file_rabdiff() functions or their string counterparts.

Starting with version 1.5.0 this function is an alias of xdiff_file_bpatch().

### Parameters

The original file.

The binary patch file.

Path of the resulting file.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 xdiff_file_patch_binary() example

The following code applies binary diff to a file.

```
<?php
$old_version = 'archive-1.0.tgz';
$patch = 'archive.bpatch';

$result = xdiff_file_patch_binary($old_version, $patch, 'archive-1.1.tgz');
if ($result) {
   echo "File patched";
} else {
   echo "File couldn't be patched";
}

?>
```

### Notes

Note:

Both files (file and patch) will be loaded into memory so ensure that your memory_limit is set high enough.

### See Also

- xdiff_string_patch_binary() - Alias of xdiff_string_bpatch

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-file-patch-binary.php
