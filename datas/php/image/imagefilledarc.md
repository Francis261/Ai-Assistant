# imagefilledarc

Source: https://devdocs.io/php/function.imagefilledarc

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

imagefilledarc — Draw a partial arc and fill it

### Description

```
imagefilledarc(
 GdImage $image,
 int $center_x,
 int $center_y,
 int $width,
 int $height,
 int $start_angle,
 int $end_angle,
 int $color,
 int $style
): bool
```

Draws a partial arc centered at the specified coordinate in the given image.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

x-coordinate of the center.

y-coordinate of the center.

The arc width.

The arc height.

The arc start angle, in degrees.

The arc end angle, in degrees. 0° is located at the three-o'clock position, and the arc is drawn clockwise.

A color identifier created with imagecolorallocate().

A bitwise OR of the following possibilities:

1. IMG_ARC_PIE
2. IMG_ARC_CHORD
3. IMG_ARC_NOFILL
4. IMG_ARC_EDGED

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Creating a 3D looking pie

```
<?php

// create image
$image = imagecreatetruecolor(100, 100);

// allocate some colors
$white    = imagecolorallocate($image, 0xFF, 0xFF, 0xFF);
$gray     = imagecolorallocate($image, 0xC0, 0xC0, 0xC0);
$darkgray = imagecolorallocate($image, 0x90, 0x90, 0x90);
$navy     = imagecolorallocate($image, 0x00, 0x00, 0x80);
$darknavy = imagecolorallocate($image, 0x00, 0x00, 0x50);
$red      = imagecolorallocate($image, 0xFF, 0x00, 0x00);
$darkred  = imagecolorallocate($image, 0x90, 0x00, 0x00);

// make the 3D effect
for ($i = 60; $i > 50; $i--) {
   imagefilledarc($image, 50, $i, 100, 50, 0, 45, $darknavy, IMG_ARC_PIE);
   imagefilledarc($image, 50, $i, 100, 50, 45, 75 , $darkgray, IMG_ARC_PIE);
   imagefilledarc($image, 50, $i, 100, 50, 75, 360 , $darkred, IMG_ARC_PIE);
}

imagefilledarc($image, 50, 50, 100, 50, 0, 45, $navy, IMG_ARC_PIE);
imagefilledarc($image, 50, 50, 100, 50, 45, 75 , $gray, IMG_ARC_PIE);
imagefilledarc($image, 50, 50, 100, 50, 75, 360 , $red, IMG_ARC_PIE);

// flush image
header('Content-type: image/png');
imagepng($image);
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagefilledarc.php
