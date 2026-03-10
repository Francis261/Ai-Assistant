# ImagickDraw::setTextAntialias

Source: https://devdocs.io/php/imagickdraw.settextantialias

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setTextAntialias — Controls whether text is antialiased

### Description

```
public ImagickDraw::setTextAntialias(bool $antialias): bool
```

This function is currently not documented; only its argument list is available.

Controls whether text is antialiased. Text is antialiased by default.

### Parameters

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setTextAntialias() example

```
<?php
function setTextAntialias($fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor('none');
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(1);
    $draw->setFontSize(32);
    $draw->setTextAntialias(false);
    $draw->annotation(5, 30, "Lorem Ipsum!");
    $draw->setTextAntialias(true);
    $draw->annotation(5, 65, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(220, 80, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    //Scale the image so that people can see the aliasing.
    $imagick->scaleImage(220 * 6, 80 * 6);
    $imagick->cropImage(640, 480, 0, 0);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.settextantialias.php
