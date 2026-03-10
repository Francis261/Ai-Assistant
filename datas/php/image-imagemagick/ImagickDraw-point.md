# ImagickDraw::point

Source: https://devdocs.io/php/imagickdraw.point

(PECL imagick 2, PECL imagick 3)

ImagickDraw::point — Draws a point

### Description

```
public ImagickDraw::point(float $x, float $y): bool
```

This function is currently not documented; only its argument list is available.

Draws a point using the current stroke color and stroke thickness at the specified coordinates.

### Parameters

point's x coordinate

point's y coordinate

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::point() example

```
<?php
function point($fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setFillColor($fillColor);

    for ($x = 0; $x < 10000; $x++) {
        $draw->point(rand(0, 500), rand(0, 500));
    }

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.point.php
