# image_type_to_extension

Source: https://devdocs.io/php/function.image-type-to-extension

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

image_type_to_extension — Get file extension for image type

### Description

```
image_type_to_extension(int $image_type, bool $include_dot = true): string|false
```

Returns the extension for the given IMAGETYPE_* constant.

### Parameters

One of the IMAGETYPE_* constant.

Whether to prepend a dot to the extension or not. Default to true.

### Return Values

A string with the extension corresponding to the given image type, or false on failure.

### Examples

Example #1 image_type_to_extension() example

```
<?php
// Create image instance
$im = imagecreatetruecolor(100, 100);

// Save image
imagepng($im, './test' . image_type_to_extension(IMAGETYPE_PNG));
?>
```

### Notes

Note:

This function does not require the GD image library.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.image-type-to-extension.php
