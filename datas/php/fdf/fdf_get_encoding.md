# fdf_get_encoding

Source: https://devdocs.io/php/function.fdf-get-encoding

(PHP 4 >= 4.3.0, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_get_encoding — Get the value of the /Encoding key

### Description

```
fdf_get_encoding(resource $fdf_document): string
```

Gets the value of the /Encoding key.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

### Return Values

Returns the encoding as a string. An empty string is returned if the default PDFDocEncoding/Unicode scheme is used.

### See Also

- fdf_set_encoding() - Sets FDF character encoding

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-get-encoding.php
