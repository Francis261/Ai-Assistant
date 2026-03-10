# ImagickDraw::setFontSize

Source: https://devdocs.io/php/imagickdraw.setfontsize

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFontSize — Sets the font pointsize to use when annotating with text

### Description

```
public ImagickDraw::setFontSize(float $point_size): bool
```

This function is currently not documented; only its argument list is available.

Sets the font pointsize to use when annotating with text.

### Parameters

the point size

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setFontSize() example

```
<?php
function setFontSize($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);
    $draw->setFont("../fonts/Arial.ttf");

    $sizes = [24, 36, 48, 60, 72];

    foreach ($sizes as $size) {
        $draw->setFontSize($size);
        $draw->annotation(50, ($size * $size / 16), "Lorem Ipsum!");
    }

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
 https://www.php.net/manual/en/imagickdraw.setfontsize.php
