# xdiff_string_merge3

Source: https://devdocs.io/php/function.xdiff-string-merge3

(PECL xdiff >= 0.2.0)

xdiff_string_merge3 — Merge 3 strings into one

### Description

```
xdiff_string_merge3(
 string $old_data,
 string $new_data1,
 string $new_data2,
 string &$error = ?
): mixed
```

Merges three strings into one and returns the result. The old_data is an original version of data while new_data1 and new_data2 are modified versions of an original. An optional error is used to pass any rejected parts during merging process.

### Parameters

First string with data. It acts as "old" data.

Second string with data. It acts as modified version of old_data.

Third string with data. It acts as modified version of old_data.

If provided then rejected parts are stored inside this variable.

### Return Values

Returns the merged string, false if an internal error happened, or true if merged string is empty.

### See Also

- xdiff_file_merge3() - Merge 3 files into one

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-string-merge3.php
