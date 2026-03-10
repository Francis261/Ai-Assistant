# imagesetthickness

Source: https://devdocs.io/php/function.imagesetthickness

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imagesetthickness — Set the thickness for line drawing

### Description

```
imagesetthickness(GdImage $image, int $thickness): bool
```

imagesetthickness() sets the thickness of the lines drawn when drawing rectangles, polygons, arcs etc. to thickness pixels.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Thickness, in pixels.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagesetthickness() example

```
<?php
// Create a 200x100 image
$im = imagecreatetruecolor(200, 100);
$white = imagecolorallocate($im, 0xFF, 0xFF, 0xFF);
$black = imagecolorallocate($im, 0x00, 0x00, 0x00);

// Set the background to be white
imagefilledrectangle($im, 0, 0, 299, 99, $white);

// Set the line thickness to 5
imagesetthickness($im, 5);

// Draw the rectangle
imagerectangle($im, 14, 14, 185, 85, $black);

// Output image to the browser
header('Content-Type: image/png');

imagepng($im);
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagesetthickness.php
