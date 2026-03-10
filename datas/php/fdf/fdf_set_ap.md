# fdf_set_ap

Source: https://devdocs.io/php/function.fdf-set-ap

(PHP 4, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_set_ap — Set the appearance of a field

### Description

```
fdf_set_ap(
 resource $fdf_document,
 string $field_name,
 int $face,
 string $filename,
 int $page_number
): bool
```

Sets the appearance of a field (i.e. the value of the /AP key).

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

The possible values FDFNormalAP, FDFRolloverAP and FDFDownAP.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-set-ap.php
