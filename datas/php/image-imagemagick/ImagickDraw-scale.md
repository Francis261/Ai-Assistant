# ImagickDraw::scale

Source: https://devdocs.io/php/imagickdraw.scale

(PECL imagick 2, PECL imagick 3)

ImagickDraw::scale — Adjusts the scaling factor

### Description

```
public ImagickDraw::scale(float $x, float $y): bool
```

This function is currently not documented; only its argument list is available.

Adjusts the scaling factor to apply in the horizontal and vertical directions to the current coordinate space.

### Parameters

horizontal factor

vertical factor

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::scale() example

```
<?php
function scale($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeWidth(4);
    $draw->setFillColor($fillColor);
    $draw->rectangle(200, 200, 300, 300);
    $draw->setFillColor($fillModifiedColor);
    $draw->scale(1.4, 1.4);
    $draw->rectangle(200, 200, 300, 300);

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
 https://www.php.net/manual/en/imagickdraw.scale.php
