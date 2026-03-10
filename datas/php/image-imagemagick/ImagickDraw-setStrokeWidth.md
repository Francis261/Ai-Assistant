# ImagickDraw::setStrokeWidth

Source: https://devdocs.io/php/imagickdraw.setstrokewidth

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeWidth — Sets the width of the stroke used to draw object outlines

### Description

```
public ImagickDraw::setStrokeWidth(float $width): bool
```

This function is currently not documented; only its argument list is available.

Sets the width of the stroke used to draw object outlines.

### Parameters

stroke width

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setStrokeWidth() example

```
<?php
function setStrokeWidth($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeWidth(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->line(100, 100, 400, 145);
    $draw->rectangle(100, 200, 225, 350);
    $draw->setStrokeWidth(5);
    $draw->line(100, 120, 400, 165);
    $draw->rectangle(275, 200, 400, 350);

    $image = new \Imagick();
    $image->newImage(500, 400, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setstrokewidth.php
