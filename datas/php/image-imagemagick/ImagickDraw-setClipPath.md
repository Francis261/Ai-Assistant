# ImagickDraw::setClipPath

Source: https://devdocs.io/php/imagickdraw.setclippath

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setClipPath — Associates a named clipping path with the image

### Description

```
public ImagickDraw::setClipPath(string $clip_mask): bool
```

This function is currently not documented; only its argument list is available.

Associates a named clipping path with the image. Only the areas drawn on by the clipping path will be modified as long as it remains in effect.

### Parameters

the clipping path name

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setClipPath() example

```
<?php
function setClipPath($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);

    $clipPathName = 'testClipPath';

    $draw->pushClipPath($clipPathName);
    $draw->rectangle(0, 0, 250, 250);
    $draw->popClipPath();
    $draw->setClipPath($clipPathName);
    $draw->rectangle(100, 100, 400, 400);

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
 https://www.php.net/manual/en/imagickdraw.setclippath.php
