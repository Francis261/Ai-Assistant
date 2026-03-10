# recode_string

Source: https://devdocs.io/php/function.recode-string

(PHP 4, PHP 5, PHP 7 < 7.4.0)

recode_string — Recode a string according to a recode request

### Description

```
recode_string(string $request, string $string): string
```

Recode the string string according to the recode request request.

### Parameters

The desired recode request type

The string to be recoded

### Return Values

Returns the recoded string or false, if unable to perform the recode request.

### Examples

Example #1 Basic recode_string() example

```
<?php
echo recode_string("us..flat", "The following character has a diacritical mark: á");
?>
```

### Notes

A simple recode request may be "lat1..iso646-de".

### See Also

- The GNU Recode documentation of your installation for detailed instructions about recode requests.
- mb_convert_encoding() - Convert a string from one character encoding to another
- UConverter::transcode() - Convert a string from one character encoding to another
- iconv() - Convert a string from one character encoding to another

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.recode-string.php
