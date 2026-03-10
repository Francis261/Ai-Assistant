# ImagickDraw::setFillOpacity

Source: https://devdocs.io/php/imagickdraw.setfillopacity

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFillOpacity — Sets the opacity to use when drawing using the fill color or fill texture

### Description

```
public ImagickDraw::setFillOpacity(float $opacity): bool
```

This function is currently not documented; only its argument list is available.

Sets the opacity to use when drawing using the fill color or fill texture. Fully opaque is 1.0.

### Parameters

the fill opacity

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setFillOpacity()

```
<?php
function setFillOpacity($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);

    $draw->rectangle(100, 200, 200, 300);

    $draw->setFillOpacity(0.4);
    $draw->rectangle(300, 200, 400, 300);

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
 https://www.php.net/manual/en/imagickdraw.setfillopacity.php
