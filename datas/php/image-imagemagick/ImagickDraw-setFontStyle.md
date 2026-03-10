# ImagickDraw::setFontStyle

Source: https://devdocs.io/php/imagickdraw.setfontstyle

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFontStyle — Sets the font style to use when annotating with text

### Description

```
public ImagickDraw::setFontStyle(int $style): bool
```

This function is currently not documented; only its argument list is available.

Sets the font style to use when annotating with text. The AnyStyle enumeration acts as a wild-card "don't care" option.

### Parameters

One of the STYLE constant (imagick::STYLE_*).

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setFontStyle() example

```
<?php
function setFontStyle($fillColor, $strokeColor, $backgroundColor) {
    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(1);
    $draw->setFontSize(36);
    $draw->setFontStyle(\Imagick::STYLE_NORMAL);
    $draw->annotation(50, 50, "Lorem Ipsum!");

    $draw->setFontStyle(\Imagick::STYLE_ITALIC);
    $draw->annotation(50, 100, "Lorem Ipsum!");

    $draw->setFontStyle(\Imagick::STYLE_OBLIQUE);
    $draw->annotation(50, 150, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(350, 300, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setfontstyle.php
