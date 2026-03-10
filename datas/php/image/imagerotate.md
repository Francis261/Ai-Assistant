# imagerotate

Source: https://devdocs.io/php/function.imagerotate

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

imagerotate — Rotate an image with a given angle

### Description

```
imagerotate(GdImage $image, float $angle, int $background_color): GdImage|false
```

Rotates the image image using the given angle in degrees.

The center of rotation is the center of the image, and the rotated image may have different dimensions than the original image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Rotation angle, in degrees. The rotation angle is interpreted as the number of degrees to rotate the image anticlockwise.

Specifies the color of the uncovered zone after the rotation

### Return Values

Returns an image object for the rotated image, or false on failure.

### Changelog

### Examples

Example #1 Rotate an image 180 degrees

This example rotates an image 180 degrees - upside down.

```
<?php
// File and rotation
$filename = 'test.jpg';
$degrees = 180;

// Content type
header('Content-type: image/jpeg');

// Load
$source = imagecreatefromjpeg($filename);

// Rotate
$rotate = imagerotate($source, $degrees, 0);

// Output
imagejpeg($rotate);
?>
```

The above example will output something similar to:

### Notes

Note:

This function is affected by the interpolation method set by imagesetinterpolation().

### See Also

- imagesetinterpolation() - Set the interpolation method

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagerotate.php
