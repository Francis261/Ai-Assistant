# imagecrop

Source: https://devdocs.io/php/function.imagecrop

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

imagecrop — Crop an image to the given rectangle

### Description

```
imagecrop(GdImage $image, array $rectangle): GdImage|false
```

Crops an image to the given rectangular area and returns the resulting image. The given image is not modified.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The cropping rectangle as array with keys x, y, width and height.

### Return Values

Return cropped image object on success or false on failure.

### Changelog

### Examples

Example #1 imagecrop() example

This example shows how to crop an image to a square area.

```
<?php
$im = imagecreatefrompng('example.png');
$size = min(imagesx($im), imagesy($im));
$im2 = imagecrop($im, ['x' => 0, 'y' => 0, 'width' => $size, 'height' => $size]);
if ($im2 !== FALSE) {
    imagepng($im2, 'example-cropped.png');
}
?>
```

### See Also

- imagecropauto() - Crop an image automatically using one of the available modes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecrop.php
