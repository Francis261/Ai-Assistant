# base64_encode

Source: https://devdocs.io/php/function.base64-encode

(PHP 4, PHP 5, PHP 7, PHP 8)

base64_encode — Encodes data with MIME base64

### Description

```
base64_encode(string $string): string
```

Encodes the given string with base64.

This encoding is designed to make binary data survive transport through transport layers that are not 8-bit clean, such as mail bodies.

Base64-encoded data takes about 33% more space than the original data.

### Parameters

The data to encode.

### Return Values

The encoded data, as a string.

### Examples

Example #1 base64_encode() example

```
<?php
$str = 'This is an encoded string';
echo base64_encode($str);
?>
```

The above example will output:

```
VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw==
```

### See Also

- base64_decode() - Decodes data encoded with MIME base64
- chunk_split() - Split a string into smaller chunks
- convert_uuencode() - Uuencode a string
- » RFC 2045 section 6.8

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.base64-encode.php
