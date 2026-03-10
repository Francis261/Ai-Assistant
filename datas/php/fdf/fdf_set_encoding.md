# fdf_set_encoding

Source: https://devdocs.io/php/function.fdf-set-encoding

(PHP 4 >= 4.0.7, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_set_encoding — Sets FDF character encoding

### Description

```
fdf_set_encoding(resource $fdf_document, string $encoding): bool
```

Sets the character encoding for the FDF document.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

The encoding name. The following values are supported: "Shift-JIS", "UHC", "GBK" and "BigFive".

An empty string resets the encoding to the default PDFDocEncoding/Unicode scheme.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-set-encoding.php
