# ImagickDraw::setTextUnderColor

Source: https://devdocs.io/php/imagickdraw.settextundercolor

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setTextUnderColor — Specifies the color of a background rectangle

### Description

```
public ImagickDraw::setTextUnderColor(ImagickPixel|string $under_color): bool
```

This function is currently not documented; only its argument list is available.

Specifies the color of a background rectangle to place under text annotations.

### Parameters

the under color

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setTextUnderColor() example

```
<?php
function setTextUnderColor($strokeColor, $fillColor, $backgroundColor, $textUnderColor) {
    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);
    $draw->annotation(50, 75, "Lorem Ipsum!");
    $draw->setTextUnderColor($textUnderColor);
    $draw->annotation(50, 175, "Lorem Ipsum!");

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
 https://www.php.net/manual/en/imagickdraw.settextundercolor.php
