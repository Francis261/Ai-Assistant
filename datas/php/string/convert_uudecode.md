# convert_uudecode

Source: https://devdocs.io/php/function.convert-uudecode

(PHP 5, PHP 7, PHP 8)

convert_uudecode — Decode a uuencoded string

### Description

```
convert_uudecode(string $string): string|false
```

convert_uudecode() decodes a uuencoded string.

Note: convert_uudecode() neither accepts the begin nor the end line, which are part of uuencoded files.

### Parameters

The uuencoded data.

### Return Values

Returns the decoded data as a string or false on failure.

### Examples

Example #1 convert_uudecode() example

```
<?php
echo convert_uudecode("+22!L;W9E(%!(4\"$`\n`");
?>
```

The above example will output:

```
I love PHP!
```

### See Also

- convert_uuencode() - Uuencode a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.convert-uudecode.php
