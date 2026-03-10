# sodium_memcmp

Source: https://devdocs.io/php/function.sodium-memcmp

(PHP 7 >= 7.2.0, PHP 8)

sodium_memcmp — Test for equality in constant-time

### Description

```
sodium_memcmp(#[\SensitiveParameter] string $string1, #[\SensitiveParameter] string $string2): int
```

Compare two strings in constant-time.

In practice, you almost always want to use hash_equals() instead, since it provides the same logic but returns a bool instead of an int. However, if you're using the return value of a comparison in a calculation that's timing-sensitive, and worried about timing leaks with bool-to-int conversions, sodium_memcmp() is an ideal replacement.

### Parameters

String to compare

Other string to compare

### Return Values

Returns 0 if both strings are equal; -1 otherwise.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-memcmp.php
