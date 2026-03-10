# ImagickDraw::setStrokeOpacity

Source: https://devdocs.io/php/imagickdraw.setstrokeopacity

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeOpacity — Specifies the opacity of stroked object outlines

### Description

```
public ImagickDraw::setStrokeOpacity(float $opacity): bool
```

This function is currently not documented; only its argument list is available.

Specifies the opacity of stroked object outlines.

### Parameters

stroke opacity. 1.0 is fully opaque

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setStrokeOpacity() example

```
<?php
function setStrokeOpacity($strokeColor, $fillColor, $backgroundColor) {
    $draw = new \ImagickDraw();

    $draw->setStrokeWidth(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(10);
    $draw->setStrokeOpacity(1);
    $draw->line(100, 80, 400, 125);
    $draw->rectangle(25, 200, 150, 350);
    $draw->setStrokeOpacity(0.5);
    $draw->line(100, 100, 400, 145);
    $draw->rectangle(200, 200, 325, 350);
    $draw->setStrokeOpacity(0.2);
    $draw->line(100, 120, 400, 165);
    $draw->rectangle(375, 200, 500, 350);

    $image = new \Imagick();
    $image->newImage(550, 400, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setstrokeopacity.php
