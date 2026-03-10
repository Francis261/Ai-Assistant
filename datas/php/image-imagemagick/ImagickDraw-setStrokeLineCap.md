# ImagickDraw::setStrokeLineCap

Source: https://devdocs.io/php/imagickdraw.setstrokelinecap

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeLineCap — Specifies the shape to be used at the end of open subpaths when they are stroked

### Description

```
public ImagickDraw::setStrokeLineCap(int $linecap): bool
```

This function is currently not documented; only its argument list is available.

Specifies the shape to be used at the end of open subpaths when they are stroked.

### Parameters

One of the LINECAP constant (imagick::LINECAP_*).

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setStrokeLineCap() example

```
<?php
function setStrokeLineCap($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(25);

    $lineTypes = [\Imagick::LINECAP_BUTT, \Imagick::LINECAP_ROUND, \Imagick::LINECAP_SQUARE,];

    $offset = 0;

    foreach ($lineTypes as $lineType) {
        $draw->setStrokeLineCap($lineType);
        $draw->line(50 + $offset, 50, 50 + $offset, 250);
        $offset += 50;
    }

    $imagick = new \Imagick();
    $imagick->newImage(300, 300, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setstrokelinecap.php
