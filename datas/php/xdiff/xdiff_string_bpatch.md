# xdiff_string_bpatch

Source: https://devdocs.io/php/function.xdiff-string-bpatch

(PECL xdiff >= 1.5.0)

xdiff_string_bpatch — Patch a string with a binary diff

### Description

```
xdiff_string_bpatch(string $str, string $patch): string
```

Patches a string str with a binary patch. This function accepts patches created both via xdiff_string_bdiff() and xdiff_string_rabdiff() functions or their file counterparts.

### Parameters

The original binary string.

The binary patch string.

### Return Values

Returns the patched string, or false on error.

### See Also

- xdiff_string_bdiff() - Make binary diff of two strings
- xdiff_string_rabdiff() - Make a binary diff of two strings using the Rabin's polynomial fingerprinting algorithm

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-string-bpatch.php
