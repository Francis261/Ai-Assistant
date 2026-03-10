# rawurldecode

Source: https://devdocs.io/php/function.rawurldecode

(PHP 4, PHP 5, PHP 7, PHP 8)

rawurldecode — Decode URL-encoded strings

### Description

```
rawurldecode(string $string): string
```

Returns a string in which the sequences with percent (%) signs followed by two hex digits have been replaced with literal characters.

### Parameters

The URL to be decoded.

### Return Values

Returns the decoded URL, as a string.

### Examples

Example #1 rawurldecode() example

```
<?php

echo rawurldecode('foo%20bar%40baz'); // foo bar@baz

?>
```

### Notes

Note:

rawurldecode() does not decode plus symbols ('+') into spaces. urldecode() does.

### See Also

- rawurlencode() - URL-encode according to RFC 3986
- urldecode() - Decodes URL-encoded string
- urlencode() - URL-encodes string
- » RFC 3986

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.rawurldecode.php
