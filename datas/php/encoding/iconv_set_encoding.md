# iconv_set_encoding

Source: https://devdocs.io/php/function.iconv-set-encoding

(PHP 4 >= 4.0.5, PHP 5, PHP 7, PHP 8)

iconv_set_encoding — Set current setting for character encoding conversion

### Description

```
iconv_set_encoding(string $type, string $encoding): bool
```

Changes the value of the internal configuration variable specified by type to encoding.

### Parameters

The value of type can be any one of these:

- input_encoding
- output_encoding
- internal_encoding

The character set.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 iconv_set_encoding() example

```
<?php
iconv_set_encoding("internal_encoding", "UTF-8");
iconv_set_encoding("output_encoding", "ISO-8859-1");
?>
```

### See Also

- iconv_get_encoding() - Retrieve internal configuration variables of iconv extension
- ob_iconv_handler() - Convert character encoding as output buffer handler

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iconv-set-encoding.php
