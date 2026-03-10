# xdiff_file_bpatch

Source: https://devdocs.io/php/function.xdiff-file-bpatch

(PECL xdiff >= 1.5.0)

xdiff_file_bpatch — Patch a file with a binary diff

### Description

```
xdiff_file_bpatch(string $file, string $patch, string $dest): bool
```

Patches a file with a binary patch and stores the result in a file dest. This function accepts patches created both via xdiff_file_bdiff() and xdiff_file_rabdiff() functions or their string counterparts.

### Parameters

The original file.

The binary patch file.

Path of the resulting file.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 xdiff_file_bpatch() example

The following code applies binary diff to a file.

```
<?php
$old_version = 'archive-1.0.tgz';
$patch = 'archive.bpatch';

$result = xdiff_file_bpatch($old_version, $patch, 'archive-1.1.tgz');
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

- xdiff_file_bdiff() - Make binary diff of two files
- xdiff_file_rabdiff() - Make binary diff of two files using the Rabin's polynomial fingerprinting algorithm

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-file-bpatch.php
