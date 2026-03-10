# imagefilltoborder

Source: https://devdocs.io/php/function.imagefilltoborder

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefilltoborder — Flood fill to specific color

### Description

```
imagefilltoborder(
 GdImage $image,
 int $x,
 int $y,
 int $border_color,
 int $color
): bool
```

imagefilltoborder() performs a flood fill whose border color is defined by border_color. The starting point for the fill is x, y (top left is 0, 0) and the region is filled with color color.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

x-coordinate of start.

y-coordinate of start.

The border color. A color identifier created with imagecolorallocate().

The fill color. A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Filling an ellipse with a color

```
<?php
// Create the image handle, set the background to white
$im = imagecreatetruecolor(100, 100);
imagefilledrectangle($im, 0, 0, 100, 100, imagecolorallocate($im, 255, 255, 255));

// Draw an ellipse to fill with a black border
imageellipse($im, 50, 50, 50, 50, imagecolorallocate($im, 0, 0, 0));

// Set the border and fill colors
$border = imagecolorallocate($im, 0, 0, 0);
$fill = imagecolorallocate($im, 255, 0, 0);

// Fill the selection
imagefilltoborder($im, 50, 50, $border, $fill);

// Output
header('Content-type: image/png');
imagepng($im);
?>
```

The above example will output something similar to:

### Notes

The algorithm does not explicitly remember which pixels have already been set, but rather infers that from the color of the pixel, so it cannot distinguish between freshly set pixels and pixels that are already there. That means chosing any fill color that is already used in the image may yield undesired results.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagefilltoborder.php
