# base64_decode

Source: https://devdocs.io/php/function.base64-decode

(PHP 4, PHP 5, PHP 7, PHP 8)

base64_decode — Decodes data encoded with MIME base64

### Description

```
base64_decode(string $string, bool $strict = false): string|false
```

Decodes a base64 encoded string.

### Parameters

The encoded data.

If the strict parameter is set to true then the base64_decode() function will return false if the input contains character from outside the base64 alphabet. Otherwise invalid characters will be silently discarded.

### Return Values

Returns the decoded data or false on failure. The returned data may be binary.

### Examples

Example #1 base64_decode() example

```
<?php
$str = 'VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw==';
echo base64_decode($str);
?>
```

The above example will output:

```
This is an encoded string
```

### See Also

- base64_encode() - Encodes data with MIME base64
- » RFC 2045 section 6.8

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.base64-decode.php
