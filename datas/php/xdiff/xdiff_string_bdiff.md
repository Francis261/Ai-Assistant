# xdiff_string_bdiff

Source: https://devdocs.io/php/function.xdiff-string-bdiff

(PECL xdiff >= 1.5.0)

xdiff_string_bdiff — Make binary diff of two strings

### Description

```
xdiff_string_bdiff(string $old_data, string $new_data): string
```

Makes a binary diff of two strings and returns the result. This function works with both text and binary data. Resulting patch can be later applied using xdiff_string_bpatch()/xdiff_file_bpatch().

### Parameters

First string with binary data. It acts as "old" data.

Second string with binary data. It acts as "new" data.

### Return Values

Returns string with binary diff containing differences between "old" and "new" data or false if an internal error occurred.

### See Also

- xdiff_string_bpatch() - Patch a string with a binary diff

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-string-bdiff.php
