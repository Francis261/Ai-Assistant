# hebrev

Source: https://devdocs.io/php/function.hebrev

(PHP 4, PHP 5, PHP 7, PHP 8)

hebrev — Convert logical Hebrew text to visual text

### Description

```
hebrev(string $string, int $max_chars_per_line = 0): string
```

Converts logical Hebrew text to visual text.

The function tries to avoid breaking words.

### Parameters

A Hebrew input string.

This optional parameter indicates maximum number of characters per line that will be returned.

### Return Values

Returns the visual string.

### See Also

- hebrevc() - Convert logical Hebrew text to visual text with newline conversion

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hebrev.php
