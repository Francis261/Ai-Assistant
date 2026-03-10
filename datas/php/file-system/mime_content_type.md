# mime_content_type

Source: https://devdocs.io/php/function.mime-content-type

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

mime_content_type — Detect MIME Content-type for a file

### Description

```
mime_content_type(resource|string $filename): string|false
```

Returns the MIME content type for a file as determined by using information from the magic.mime file.

### Parameters

Path to the tested file.

### Return Values

Returns the content type in MIME format, like text/plain or application/octet-stream, or false on failure.

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

### Examples

Example #1 mime_content_type() Example

```
<?php
echo mime_content_type('php.gif') . "\n";
echo mime_content_type('test.php');
?>
```

The above example will output:

```
image/gif
text/plain
```

### See Also

- finfo_file() - Return information about a file
- finfo_buffer() - Return information about a string buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mime-content-type.php
