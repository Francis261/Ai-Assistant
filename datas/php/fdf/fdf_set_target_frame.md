# fdf_set_target_frame

Source: https://devdocs.io/php/function.fdf-set-target-frame

(PHP 4 >= 4.3.0, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_set_target_frame — Set target frame for form display

### Description

```
fdf_set_target_frame(resource $fdf_document, string $frame_name): bool
```

Sets the target frame to display a result PDF defined with fdf_save_file() in.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

The frame name, as a string.

### Return Values

Returns true on success or false on failure.

### See Also

- fdf_save_file()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-set-target-frame.php
