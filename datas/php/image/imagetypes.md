# imagetypes

Source: https://devdocs.io/php/function.imagetypes

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

imagetypes — Return the image types supported by this PHP build

### Description

```
imagetypes(): int
```

Returns the image types supported by the current PHP installation.

### Parameters

This function has no parameters.

### Return Values

Returns a bit-field corresponding to the image formats supported by the version of GD linked into PHP. The following bits are returned, IMG_AVIF | IMG_BMP | IMG_GIF | IMG_JPG | IMG_PNG | IMG_WBMP | IMG_XPM | IMG_WEBP.

### Changelog

### Examples

Example #1 Checking for PNG support

```
<?php
if (imagetypes() & IMG_PNG) {
    echo "PNG Support is enabled";
}
?>
```

### See Also

- gd_info() - Retrieve information about the currently installed GD library

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagetypes.php
