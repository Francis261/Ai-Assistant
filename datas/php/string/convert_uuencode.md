# convert_uuencode

Source: https://devdocs.io/php/function.convert-uuencode

(PHP 5, PHP 7, PHP 8)

convert_uuencode — Uuencode a string

### Description

```
convert_uuencode(string $string): string
```

convert_uuencode() encodes a string using the uuencode algorithm.

Uuencode translates all strings (including binary data) into printable characters, making them safe for network transmissions. Uuencoded data is about 35% larger than the original.

Note: convert_uuencode() neither produces the begin nor the end line, which are part of uuencoded files.

### Parameters

The data to be encoded.

### Return Values

Returns the uuencoded data.

### Changelog

### Examples

Example #1 convert_uuencode() example

```
<?php
$some_string = "test\ntext text\r\n";

echo convert_uuencode($some_string);
?>
```

The above example will output:

```
0=&5S=`IT97AT('1E>'0-"@``
`
```

### See Also

- convert_uudecode() - Decode a uuencoded string
- base64_encode() - Encodes data with MIME base64

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.convert-uuencode.php
