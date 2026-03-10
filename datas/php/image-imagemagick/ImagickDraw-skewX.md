# ImagickDraw::skewX

Source: https://devdocs.io/php/imagickdraw.skewx

(PECL imagick 2, PECL imagick 3)

ImagickDraw::skewX — Skews the current coordinate system in the horizontal direction

### Description

```
public ImagickDraw::skewX(float $degrees): bool
```

This function is currently not documented; only its argument list is available.

Skews the current coordinate system in the horizontal direction.

### Parameters

degrees to skew

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::skewX() example

```
<?php
function skewX($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor, 
               $startX, $startY, $endX, $endY, $skew) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeWidth(2);
    $draw->setFillColor($fillColor);
    $draw->rectangle($startX, $startY, $endX, $endY);
    $draw->setFillColor($fillModifiedColor);
    $draw->skewX($skew);
    $draw->rectangle($startX, $startY, $endX, $endY);

    $image = new \Imagick();
    $image->newImage(500, 500, $backgroundColor);
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.skewx.php
