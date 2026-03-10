# xdiff_string_rabdiff

Source: https://devdocs.io/php/function.xdiff-string-rabdiff

(PECL xdiff >= 1.5.0)

xdiff_string_rabdiff — Make a binary diff of two strings using the Rabin's polynomial fingerprinting algorithm

### Description

```
xdiff_string_rabdiff(string $old_data, string $new_data): string|false
```

Makes a binary diff of two strings using the Rabin's polynomial fingerprinting algorithm implemented by » libxdiff. Compared to xdiff_string_bdiff(), this algorithm generally produces smaller diffs and operates faster, while remaining fully compatible with xdiff_string_bpatch() and xdiff_file_bpatch() for applying patches.

This function can be used with both text and binary data. The resulting diff data can later be applied to recreate the new version from the old one.

For further information about the algorithm, see the » libxdiff documentation.

### Parameters

The first string containing the "old" binary data.

The second string containing the "new" binary data.

### Return Values

Returns a binary diff string containing the differences between the old and new data, or false on failure.

### Examples

Example #1 Creation of a binary diff between two strings

```
<?php
$old = file_get_contents('file_v1.txt');
$new = file_get_contents('file_v2.txt');

$diff = xdiff_string_rabdiff($old, $new);
file_put_contents('patch.rdiff', $diff);
?>
```

### See Also

- xdiff_string_bdiff() - Make binary diff of two strings
- xdiff_string_bpatch() - Patch a string with a binary diff
- xdiff_file_bpatch() - Patch a file with a binary diff

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-string-rabdiff.php
