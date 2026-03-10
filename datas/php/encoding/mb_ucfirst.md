# mb_ucfirst

Source: https://devdocs.io/php/function.mb-ucfirst

(PHP 8 >= 8.4.0)

mb_ucfirst — Make a string's first character uppercase

### Description

```
mb_ucfirst(string $string, ?string $encoding = null): string
```

Performs a multi-byte safe ucfirst() operation, and returns a string with the first character of string title-cased.

### Parameters

### Return Values

Returns the resulting string.

### Notes

Note:

By contrast to the standard case folding functions such as strtolower() and strtoupper(), case folding is performed on the basis of the Unicode character properties. Thus the behaviour of this function is not affected by locale settings and it can convert any characters that have 'alphabetic' property, such a-umlaut (ä).

For more information about the Unicode properties, please see » http://www.unicode.org/reports/tr21/.

### See Also

- mb_lcfirst() - Make a string's first character lowercase
- mb_convert_case() - Perform case folding on a string
- ucfirst() - Make a string's first character uppercase

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-ucfirst.php
