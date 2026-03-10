# imagefilledrectangle

Source: https://devdocs.io/php/function.imagefilledrectangle

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefilledrectangle — Draw a filled rectangle

### Description

```
imagefilledrectangle(
 GdImage $image,
 int $x1,
 int $y1,
 int $x2,
 int $y2,
 int $color
): bool
```

Creates a rectangle filled with color in the given image starting at point 1 and ending at point 2. 0, 0 is the top left corner of the image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

x-coordinate for point 1.

y-coordinate for point 1.

x-coordinate for point 2.

y-coordinate for point 2.

The fill color. A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagefilledrectangle() usage

```
<?php
// Create a 55x30 image
$im = imagecreatetruecolor(55, 30);
$white = imagecolorallocate($im, 255, 255, 255);

// Draw a white rectangle
imagefilledrectangle($im, 4, 4, 50, 25, $white);

// Save the image
imagepng($im, './imagefilledrectangle.png');
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagefilledrectangle.php
