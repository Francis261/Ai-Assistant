# sodium_add

Source: https://devdocs.io/php/function.sodium-add

(PHP 7 >= 7.2.0, PHP 8)

sodium_add — Add large numbers

### Description

```
sodium_add(string &$string1, string $string2): void
```

This adds the parameter string2 to string1, overwriting the value stored in string1. This function assumes both parameters are binary strings that represent unsigned integers in little-endian byte order.

### Parameters

String representing an arbitrary-length unsigned integer in little-endian byte order. This parameter is passed by reference and will hold the sum of the two parameters.

String representing an arbitrary-length unsigned integer in little-endian byte order.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-add.php
