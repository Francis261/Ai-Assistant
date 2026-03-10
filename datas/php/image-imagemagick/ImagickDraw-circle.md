# ImagickDraw::circle

Source: https://devdocs.io/php/imagickdraw.circle

(PECL imagick 2, PECL imagick 3)

ImagickDraw::circle — Draws a circle

### Description

```
public ImagickDraw::circle(
 float $origin_x,
 float $origin_y,
 float $perimeter_x,
 float $perimeter_y
): bool
```

This function is currently not documented; only its argument list is available.

Draws a circle on the image.

### Parameters

origin x coordinate

origin y coordinate

perimeter x coordinate

perimeter y coordinate

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::circle() example

```
<?php
function circle($strokeColor, $fillColor, $backgroundColor, $originX, $originY, $endX, $endY) {

    //Create a ImagickDraw object to draw into.
    $draw = new \ImagickDraw();

    $strokeColor = new \ImagickPixel($strokeColor);
    $fillColor = new \ImagickPixel($fillColor);

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    $draw->circle($originX, $originY, $endX, $endY);

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
 https://www.php.net/manual/en/imagickdraw.circle.php
