# ImagickDraw::translate

Source: https://devdocs.io/php/imagickdraw.translate

(PECL imagick 2, PECL imagick 3)

ImagickDraw::translate — Applies a translation to the current coordinate system

### Description

```
public ImagickDraw::translate(float $x, float $y): bool
```

This function is currently not documented; only its argument list is available.

Applies a translation to the current coordinate system which moves the coordinate system origin to the specified coordinate.

### Parameters

horizontal translation

vertical translation

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::translate() example

```
<?php
function translate($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor, 
                   $startX, $startY, $endX, $endY, $translateX, $translateY) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->rectangle($startX, $startY, $endX, $endY);

    $draw->setFillColor($fillModifiedColor);
    $draw->translate($translateX, $translateY);
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
 https://www.php.net/manual/en/imagickdraw.translate.php
