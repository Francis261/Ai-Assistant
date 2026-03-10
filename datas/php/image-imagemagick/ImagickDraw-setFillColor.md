# ImagickDraw::setFillColor

Source: https://devdocs.io/php/imagickdraw.setfillcolor

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFillColor — Sets the fill color to be used for drawing filled objects

### Description

```
public ImagickDraw::setFillColor(ImagickPixel|string $fill_color): bool
```

This function is currently not documented; only its argument list is available.

Sets the fill color to be used for drawing filled objects.

### Parameters

ImagickPixel to use to set the color

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setFillColor()

```
<?php
function setFillColor($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(1.5);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->rectangle(50, 50, 150, 150);

    $draw->setFillColor("rgb(200, 32, 32)");
    $draw->rectangle(200, 50, 300, 150);

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
 https://www.php.net/manual/en/imagickdraw.setfillcolor.php
