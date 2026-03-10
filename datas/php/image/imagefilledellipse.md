# imagefilledellipse

Source: https://devdocs.io/php/function.imagefilledellipse

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imagefilledellipse — Draw a filled ellipse

### Description

```
imagefilledellipse(
 GdImage $image,
 int $center_x,
 int $center_y,
 int $width,
 int $height,
 int $color
): bool
```

Draws an ellipse centered at the specified coordinate on the given image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

x-coordinate of the center.

y-coordinate of the center.

The ellipse width.

The ellipse height.

The fill color. A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagefilledellipse() example

```
<?php

// create a blank image
$image = imagecreatetruecolor(400, 300);

// fill the background color
$bg = imagecolorallocate($image, 0, 0, 0);

// choose a color for the ellipse
$col_ellipse = imagecolorallocate($image, 255, 255, 255);

// draw the white ellipse
imagefilledellipse($image, 200, 150, 300, 200, $col_ellipse);

// output the picture
header("Content-type: image/png");
imagepng($image);

?>
```

The above example will output something similar to:

### Notes

Note:

imagefilledellipse() ignores imagesetthickness().

### See Also

- imageellipse() - Draw an ellipse
- imagefilledarc() - Draw a partial arc and fill it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagefilledellipse.php
