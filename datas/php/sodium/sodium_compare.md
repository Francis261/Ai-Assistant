# sodium_compare

Source: https://devdocs.io/php/function.sodium-compare

(PHP 7 >= 7.2.0, PHP 8)

sodium_compare — Compare large numbers

### Description

```
sodium_compare(#[\SensitiveParameter] string $string1, #[\SensitiveParameter] string $string2): int
```

Compare two strings as if they were arbitrary-length, unsigned little-endian integers, without side-channel leakage.

### Parameters

Left operand

Right operand

### Return Values

Returns -1 if string1 is less than string2.

Returns 1 if string1 is greater than string2.

Returns 0 if both strings are equal.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-compare.php
