# imagerectangle

Source: https://devdocs.io/php/function.imagerectangle

(PHP 4, PHP 5, PHP 7, PHP 8)

imagerectangle — Draw a rectangle

### Description

```
imagerectangle(
 GdImage $image,
 int $x1,
 int $y1,
 int $x2,
 int $y2,
 int $color
): bool
```

imagerectangle() creates a rectangle starting at the specified coordinates.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Upper left x coordinate.

Upper left y coordinate 0, 0 is the top left corner of the image.

Bottom right x coordinate.

Bottom right y coordinate.

A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Simple imagerectangle() example

```
<?php
// Create a 200 x 200 image
$canvas = imagecreatetruecolor(200, 200);

// Allocate colors
$pink = imagecolorallocate($canvas, 255, 105, 180);
$white = imagecolorallocate($canvas, 255, 255, 255);
$green = imagecolorallocate($canvas, 132, 135, 28);

// Draw three rectangles each with its own color
imagerectangle($canvas, 50, 50, 150, 150, $pink);
imagerectangle($canvas, 45, 60, 120, 100, $white);
imagerectangle($canvas, 100, 120, 75, 160, $green);

// Output
header('Content-Type: image/jpeg');
imagejpeg($canvas);
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagerectangle.php
