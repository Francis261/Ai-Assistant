# ob_iconv_handler

Source: https://devdocs.io/php/function.ob-iconv-handler

(PHP 4 >= 4.0.5, PHP 5, PHP 7, PHP 8)

ob_iconv_handler — Convert character encoding as output buffer handler

### Description

```
ob_iconv_handler(string $contents, int $status): string
```

Converts the string encoded in internal_encoding to output_encoding.

internal_encoding and output_encoding should be defined in the php.ini file or in iconv_set_encoding().

### Parameters

See ob_start() for information about this handler parameters.

### Return Values

See ob_start() for information about this handler return values.

### Examples

Example #1 ob_iconv_handler() example:

```
<?php
iconv_set_encoding("internal_encoding", "UTF-8");
iconv_set_encoding("output_encoding", "ISO-8859-1");
ob_start("ob_iconv_handler"); // start output buffering
?>
```

### See Also

- iconv_get_encoding() - Retrieve internal configuration variables of iconv extension
- iconv_set_encoding() - Set current setting for character encoding conversion
- output-control functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ob-iconv-handler.php
