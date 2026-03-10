# ImagickDraw::rotate

Source: https://devdocs.io/php/imagickdraw.rotate

(PECL imagick 2, PECL imagick 3)

ImagickDraw::rotate — Applies the specified rotation to the current coordinate space

### Description

```
public ImagickDraw::rotate(float $degrees): bool
```

This function is currently not documented; only its argument list is available.

Applies the specified rotation to the current coordinate space.

### Parameters

degrees to rotate.

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::rotate() example

```
<?php
function rotate($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor) {
    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeOpacity(1);
    $draw->setFillColor($fillColor);
    $draw->rectangle(200, 200, 300, 300);
    $draw->setFillColor($fillModifiedColor);
    $draw->rotate(15);
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
 https://www.php.net/manual/en/imagickdraw.rotate.php
