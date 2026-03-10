# hebrevc

Source: https://devdocs.io/php/function.hebrevc

(PHP 4, PHP 5, PHP 7)

hebrevc — Convert logical Hebrew text to visual text with newline conversion

This function has been DEPRECATED as of PHP 7.4.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
hebrevc(string $hebrew_text, int $max_chars_per_line = 0): string
```

This function is similar to hebrev() with the difference that it converts newlines (\n) to "<br>\n".

The function tries to avoid breaking words.

### Parameters

A Hebrew input string.

This optional parameter indicates maximum number of characters per line that will be returned.

### Return Values

Returns the visual string.

### Changelog

### See Also

- hebrev() - Convert logical Hebrew text to visual text

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hebrevc.php
