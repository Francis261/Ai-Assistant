# ImagickDraw::setFontWeight

Source: https://devdocs.io/php/imagickdraw.setfontweight

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFontWeight — Sets the font weight

### Description

```
public ImagickDraw::setFontWeight(int $weight): bool
```

This function is currently not documented; only its argument list is available.

Sets the font weight to use when annotating with text.

### Parameters

### Return Values

### Examples

Example #1 ImagickDraw::setFontWeight() example

```
<?php
function setFontWeight($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(1);

    $draw->setFontSize(36);

    $draw->setFontWeight(100);
    $draw->annotation(50, 50, "Lorem Ipsum!");

    $draw->setFontWeight(200);
    $draw->annotation(50, 100, "Lorem Ipsum!");

    $draw->setFontWeight(400);
    $draw->annotation(50, 150, "Lorem Ipsum!");

    $draw->setFontWeight(800);
    $draw->annotation(50, 200, "Lorem Ipsum!");

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
 https://www.php.net/manual/en/imagickdraw.setfontweight.php
