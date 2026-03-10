# ImagickDraw::setStrokeAntialias

Source: https://devdocs.io/php/imagickdraw.setstrokeantialias

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeAntialias — Controls whether stroked outlines are antialiased

### Description

```
public ImagickDraw::setStrokeAntialias(bool $enabled): bool
```

This function is currently not documented; only its argument list is available.

Controls whether stroked outlines are antialiased. Stroked outlines are antialiased by default. When antialiasing is disabled stroked pixels are thresholded to determine if the stroke color or underlying canvas color should be used.

### Parameters

the antialias setting

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setStrokeAntialias() example

```
<?php
function setStrokeAntialias($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(1);
    $draw->setStrokeAntialias(false);
    $draw->line(100, 100, 400, 105);

    $draw->line(100, 140, 400, 185);

    $draw->setStrokeAntialias(true);
    $draw->line(100, 110, 400, 115);
    $draw->line(100, 150, 400, 195);

    $image = new \Imagick();
    $image->newImage(500, 250, $backgroundColor);
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setstrokeantialias.php
