# Imagick::roundCorners

Source: https://devdocs.io/php/imagick.roundcorners

(PECL imagick 2, PECL imagick 3)

Imagick::roundCorners — Rounds image corners

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::roundCorners(
 float $x_rounding,
 float $y_rounding,
 float $stroke_width = 10,
 float $displace = 5,
 float $size_correction = -6
): bool
```

Rounds image corners. The first two parameters control the amount of rounding and the three last parameters can be used to fine-tune the rounding process. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer. This method is not available if Imagick has been compiled against ImageMagick version 7.0.0 or newer.

### Parameters

x rounding

y rounding

stroke width

image displace

size correction

### Return Values

Returns true on success.

### Examples

Example #1 Using Imagick::roundCorners():

Rounds the image corners

```
<?php

$image = new Imagick();
$image->newPseudoImage(100, 100, "magick:rose");
$image->setImageFormat("png");

$image->roundCorners(5,3);
$image->writeImage("rounded.png");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.roundcorners.php
