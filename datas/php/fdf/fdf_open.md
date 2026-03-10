# fdf_open

Source: https://devdocs.io/php/function.fdf-open

(PHP 4, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_open — Open a FDF document

### Description

```
fdf_open(string $filename): resource
```

Opens a file with form data.

You can also use fdf_open_string() to process the results of a PDF form POST request.

### Parameters

Path to the FDF file. This file must contain the data as returned from a PDF form or created using fdf_create() and fdf_save().

### Return Values

Returns a FDF document handle, or false on error.

### Examples

Example #1 Accessing the form data

```
<?php
// Save the FDF data into a temp file
$fdffp = fopen("test.fdf", "w");
fwrite($fdffp, $HTTP_FDF_DATA, strlen($HTTP_FDF_DATA));
fclose($fdffp);

// Open temp file and evaluate data
$fdf = fdf_open("test.fdf");
/* ... */
fdf_close($fdf);
?>
```

### See Also

- fdf_open_string() - Read a FDF document from a string
- fdf_close() - Close an FDF document
- fdf_create() - Create a new FDF document
- fdf_save() - Save a FDF document

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-open.php
