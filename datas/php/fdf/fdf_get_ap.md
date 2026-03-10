# fdf_get_ap

Source: https://devdocs.io/php/function.fdf-get-ap

(PHP 4 >= 4.3.0, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_get_ap — Get the appearance of a field

### Description

```
fdf_get_ap(
 resource $fdf_document,
 string $field,
 int $face,
 string $filename
): bool
```

Gets the appearance of a field (i.e. the value of the /AP key) and stores it in a file.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

The possible values are FDFNormalAP, FDFRolloverAP and FDFDownAP.

The appearance will be stored in this parameter.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-get-ap.php
