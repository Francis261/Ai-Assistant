# imageresolution

Source: https://devdocs.io/php/function.imageresolution

(PHP 7 >= 7.2.0, PHP 8)

imageresolution — Get or set the resolution of the image

### Description

```
imageresolution(GdImage $image, ?int $resolution_x = null, ?int $resolution_y = null): array|bool
```

imageresolution() allows to set and get the resolution of an image in DPI (dots per inch). If the optional parameters are null, the current resolution is returned as an indexed array. If only resolution_x is not null, the horizontal and vertical resolution are set to this value. If none of the optional parameters are null, the horizontal and vertical resolution are set to these values, respectively.

The resolution is only used as meta information when images are read from and written to formats supporting this kind of information (curently PNG and JPEG). It does not affect any drawing operations. The default resolution for new images is 96 DPI.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The horizontal resolution in DPI.

The vertical resolution in DPI.

### Return Values

When used as getter, it returns an indexed array of the horizontal and vertical resolution on success, or false on failure. When used as setter, it returns true on success, or false on failure.

### Changelog

### Examples

Example #1 Setting and getting the resolution of an image

```
<?php
$im = imagecreatetruecolor(100, 100);
imageresolution($im, 200);
print_r(imageresolution($im));
imageresolution($im, 300, 72);
print_r(imageresolution($im));
?>
```

The above example will output:

```
Array
(
    [0] => 200
    [1] => 200
)
Array
(
    [0] => 300
    [1] => 72
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageresolution.php
