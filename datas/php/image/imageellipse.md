# imageellipse

Source: https://devdocs.io/php/function.imageellipse

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imageellipse — Draw an ellipse

### Description

```
imageellipse(
 GdImage $image,
 int $center_x,
 int $center_y,
 int $width,
 int $height,
 int $color
): bool
```

Draws an ellipse centered at the specified coordinates.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

x-coordinate of the center.

y-coordinate of the center.

The ellipse width.

The ellipse height.

The color of the ellipse. A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imageellipse() example

```
<?php

// Create a blank image.
$image = imagecreatetruecolor(400, 300);

// Select the background color.
$bg = imagecolorallocate($image, 0, 0, 0);

// Fill the background with the color selected above.
imagefill($image, 0, 0, $bg);

// Choose a color for the ellipse.
$col_ellipse = imagecolorallocate($image, 255, 255, 255);

// Draw the ellipse.
imageellipse($image, 200, 150, 300, 200, $col_ellipse);

// Output the image.
header("Content-type: image/png");
imagepng($image);

?>
```

The above example will output something similar to:

### Notes

Note:

imageellipse() ignores imagesetthickness().

### See Also

- imagefilledellipse() - Draw a filled ellipse
- imagearc() - Draws an arc

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageellipse.php
