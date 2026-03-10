# imagepolygon

Source: https://devdocs.io/php/function.imagepolygon

(PHP 4, PHP 5, PHP 7, PHP 8)

imagepolygon — Draws a polygon

### Description

Signature as of PHP 8.0.0 (not supported with named arguments)

```
imagepolygon(GdImage $image, array $points, int $color): bool
```

Alternative signature (deprecated as of PHP 8.1.0)

```
imagepolygon(
 GdImage $image,
 array $points,
 int $num_points,
 int $color
): bool
```

imagepolygon() creates a polygon in the given image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

An array containing the polygon's vertices, e.g.:

Total number of points (vertices), which must be at least 3.

A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagepolygon() example

```
<?php
// Create a blank image
$image = imagecreatetruecolor(400, 300);

// Allocate a color for the polygon
$col_poly = imagecolorallocate($image, 255, 255, 255);

// Draw the polygon
imagepolygon($image, array(
        0,   0,
        100, 200,
        300, 200
    ),
    $col_poly);

// Output the picture to the browser
header('Content-type: image/png');

imagepng($image);
?>
```

The above example will output something similar to:

### See Also

- imagefilledpolygon() - Draw a filled polygon
- imageopenpolygon() - Draws an open polygon
- imagecreate() - Create a new palette based image
- imagecreatetruecolor() - Create a new true color image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagepolygon.php
