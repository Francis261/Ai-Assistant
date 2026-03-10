# imagearc

Source: https://devdocs.io/php/function.imagearc

(PHP 4, PHP 5, PHP 7, PHP 8)

imagearc — Draws an arc

### Description

```
imagearc(
 GdImage $image,
 int $center_x,
 int $center_y,
 int $width,
 int $height,
 int $start_angle,
 int $end_angle,
 int $color
): bool
```

imagearc() draws an arc of circle centered at the given coordinates.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

x-coordinate of the center.

y-coordinate of the center.

The arc width.

The arc height.

The arc start angle, in degrees.

The arc end angle, in degrees. 0° is located at the three-o'clock position, and the arc is drawn clockwise.

A color identifier created with imagecolorallocate().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Drawing a circle with imagearc()

```
<?php

// create a 200*200 image
$img = imagecreatetruecolor(200, 200);

// allocate some colors
$white = imagecolorallocate($img, 255, 255, 255);
$red   = imagecolorallocate($img, 255,   0,   0);
$green = imagecolorallocate($img,   0, 255,   0);
$blue  = imagecolorallocate($img,   0,   0, 255);

// draw the head
imagearc($img, 100, 100, 200, 200,  0, 360, $white);
// mouth
imagearc($img, 100, 100, 150, 150, 25, 155, $red);
// left and then the right eye
imagearc($img,  60,  75,  50,  50,  0, 360, $green);
imagearc($img, 140,  75,  50,  50,  0, 360, $blue);

// output image in the browser
header("Content-type: image/png");
imagepng($img);

?>
```

The above example will output something similar to:

### See Also

- imagefilledarc() - Draw a partial arc and fill it
- imageellipse() - Draw an ellipse
- imagefilledellipse() - Draw a filled ellipse

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagearc.php
