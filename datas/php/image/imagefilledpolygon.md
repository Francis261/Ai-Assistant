# imagefilledpolygon

Source: https://devdocs.io/php/function.imagefilledpolygon

(PHP 4, PHP 5, PHP 7, PHP 8)

imagefilledpolygon — Draw a filled polygon

### Description

Signature as of PHP 8.0.0 (not supported with named arguments)

```
imagefilledpolygon(GdImage $image, array $points, int $color): bool
```

Alternative signature (deprecated as of PHP 8.1.0)

```
imagefilledpolygon(
 GdImage $image,
 array $points,
 int $num_points,
 int $color
): bool
```

imagefilledpolygon() creates a filled polygon in the given image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

An array containing the x and y coordinates of the polygons vertices consecutively.

Total number of points (vertices), which must be at least 3.

A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagefilledpolygon() example

```
<?php
// set up array of points for polygon
$values = array(
            40,  50,  // Point 1 (x, y)
            20,  240, // Point 2 (x, y)
            60,  60,  // Point 3 (x, y)
            240, 20,  // Point 4 (x, y)
            50,  40,  // Point 5 (x, y)
            10,  10   // Point 6 (x, y)
            );

// create image
$image = imagecreatetruecolor(250, 250);

// allocate colors
$bg   = imagecolorallocate($image, 0, 0, 0);
$blue = imagecolorallocate($image, 0, 0, 255);

// fill the background
imagefilledrectangle($image, 0, 0, 249, 249, $bg);

// draw a polygon
imagefilledpolygon($image, $values, $blue);

// flush image
header('Content-type: image/png');
imagepng($image);
?>
```

The above example will output something similar to:

### See Also

- imagepolygon() - Draws a polygon

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagefilledpolygon.php
