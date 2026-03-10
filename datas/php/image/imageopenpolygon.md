# imageopenpolygon

Source: https://devdocs.io/php/function.imageopenpolygon

(PHP 7 >= 7.2.0, PHP 8)

imageopenpolygon — Draws an open polygon

### Description

Signature as of PHP 8.0.0 (not supported with named arguments)

```
imageopenpolygon(GdImage $image, array $points, int $color): bool
```

Alternative signature (deprecated as of PHP 8.1.0)

```
imageopenpolygon(
 GdImage $image,
 array $points,
 int $num_points,
 int $color
): bool
```

imageopenpolygon() draws an open polygon on the given image. Contrary to imagepolygon(), no line is drawn between the last and the first point.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

An array containing the polygon's vertices, e.g.:

Total number of points (vertices), which must be at least 3.

A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imageopenpolygon() example

```
<?php
// Create a blank image
$image = imagecreatetruecolor(400, 300);

// Allocate a color for the polygon
$col_poly = imagecolorallocate($image, 255, 255, 255);

// Draw the polygon
imageopenpolygon($image, array(
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

- imagepolygon() - Draws a polygon

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageopenpolygon.php
