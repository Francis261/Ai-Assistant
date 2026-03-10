# fdf_get_attachment

Source: https://devdocs.io/php/function.fdf-get-attachment

(PHP 4 >= 4.3.0, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_get_attachment — Extracts uploaded file embedded in the FDF

### Description

```
fdf_get_attachment(resource $fdf_document, string $fieldname, string $savepath): array
```

Extracts a file uploaded by means of the "file selection" field fieldname and stores it under savepath.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

May be the name of a plain file or an existing directory in which the file is to be created under its original name. Any existing file under the same name will be overwritten.

Note:

There seems to be no other way to find out the original filename but to store the file using a directory as savepath and check for the basename it was stored under.

### Return Values

The returned array contains the following fields:

- path - path were the file got stored
- size - size of the stored file in bytes
- type - mimetype if given in the FDF

### Examples

Example #1 Storing an uploaded file

```
<?php
  $fdf = fdf_open_string($HTTP_FDF_DATA);
  $data = fdf_get_attachment($fdf, "filename", "/tmpdir");
  echo "The uploaded file is stored in $data[path]";
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-get-attachment.php
