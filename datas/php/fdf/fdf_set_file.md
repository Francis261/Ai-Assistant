# fdf_set_file

Source: https://devdocs.io/php/function.fdf-set-file

(PHP 4, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_set_file — Set PDF document to display FDF data in

### Description

```
fdf_set_file(resource $fdf_document, string $url, string $target_frame = ?): bool
```

Selects a different PDF document to display the form results in then the form it originated from.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

Should be given as an absolute URL.

Use this parameter to specify the frame in which the document will be displayed. You can also set the default value for this parameter using fdf_set_target_frame().

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Passing FDF data to a second form

```
<?php
  /* set content type for Adobe FDF */
  fdf_header();

  /* start new fdf */
  $fdf = fdf_create();

  /* set field "foo" to value "bar" */
  fdf_set_value($fdf, "foo", "bar");

  /* tell client to display FDF data using "fdf_form.pdf" */
  fdf_set_file($fdf, "http://www.example.com/fdf_form.pdf");

  /* output fdf */
  fdf_save($fdf);

  /* clean up */
  fdf_close($fdf);
?>
```

### See Also

- fdf_get_file() - Get the value of the /F key
- fdf_set_target_frame() - Set target frame for form display

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-set-file.php
