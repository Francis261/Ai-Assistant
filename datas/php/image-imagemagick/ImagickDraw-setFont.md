# ImagickDraw::setFont

Source: https://devdocs.io/php/imagickdraw.setfont

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFont — Sets the fully-specified font to use when annotating with text

### Description

```
public ImagickDraw::setFont(string $font_name): bool
```

This function is currently not documented; only its argument list is available.

Sets the fully-specified font to use when annotating with text.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 ImagickDraw::setFont() example

```
<?php
function setFont($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(36);

    $draw->setFont("../fonts/Arial.ttf");
    $draw->annotation(50, 50, "Lorem Ipsum!");

    $draw->setFont("../fonts/Consolas.ttf");
    $draw->annotation(50, 100, "Lorem Ipsum!");

    $draw->setFont("../fonts/CANDY.TTF");
    $draw->annotation(50, 150, "Lorem Ipsum!");

    $draw->setFont("../fonts/Inconsolata-dz.otf");
    $draw->annotation(50, 200, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(500, 300, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setfont.php
