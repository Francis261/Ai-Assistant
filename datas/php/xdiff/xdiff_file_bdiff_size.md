# xdiff_file_bdiff_size

Source: https://devdocs.io/php/function.xdiff-file-bdiff-size

(PECL xdiff >= 1.5.0)

xdiff_file_bdiff_size — Read a size of file created by applying a binary diff

### Description

```
xdiff_file_bdiff_size(string $file): int
```

Returns a size of a result file that would be created after applying binary patch from file file to the original file.

### Parameters

The path to the binary patch created by xdiff_string_bdiff() or xdiff_string_rabdiff() function.

### Return Values

Returns the size of file that would be created.

### Examples

Example #1 xdiff_file_bdiff_size() example

The following code applies reads a size of file that would be created after applying a binary diff.

```
<?php
$length = xdiff_string_bdiff_size('file.bdiff');
echo "Resulting file will be $length bytes long";
?>
```

### See Also

- xdiff_file_bdiff() - Make binary diff of two files
- xdiff_file_rabdiff() - Make binary diff of two files using the Rabin's polynomial fingerprinting algorithm
- xdiff_file_bpatch() - Patch a file with a binary diff

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-file-bdiff-size.php
