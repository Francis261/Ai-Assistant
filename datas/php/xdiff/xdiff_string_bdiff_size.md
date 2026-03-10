# xdiff_string_bdiff_size

Source: https://devdocs.io/php/function.xdiff-string-bdiff-size

(PECL xdiff >= 1.5.0)

xdiff_string_bdiff_size — Read a size of file created by applying a binary diff

### Description

```
xdiff_string_bdiff_size(string $patch): int
```

Returns a size of a result file that would be created after applying binary patch to the original file.

### Parameters

The binary patch created by xdiff_string_bdiff() or xdiff_string_rabdiff() function.

### Return Values

Returns the size of file that would be created.

### Examples

Example #1 xdiff_string_bdiff_size() example

The following code applies reads a size of file that would be created after applying a binary diff.

```
<?php
$binary_patch = file_get_contents('file.bdiff');
$length = xdiff_string_bdiff_size($binary_patch);
echo "Resulting file will be $length bytes long";
?>
```

### See Also

- xdiff_string_bdiff() - Make binary diff of two strings
- xdiff_string_rabdiff() - Make a binary diff of two strings using the Rabin's polynomial fingerprinting algorithm
- xdiff_string_bpatch() - Patch a string with a binary diff

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-string-bdiff-size.php
