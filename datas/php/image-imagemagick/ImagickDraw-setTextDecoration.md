# ImagickDraw::setTextDecoration

Source: https://devdocs.io/php/imagickdraw.settextdecoration

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setTextDecoration — Specifies a decoration

### Description

```
public ImagickDraw::setTextDecoration(int $decoration): bool
```

This function is currently not documented; only its argument list is available.

Specifies a decoration to be applied when annotating with text.

### Parameters

One of the DECORATION constant (imagick::DECORATION_*).

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setTextDecoration() example

```
<?php
function setTextDecoration($strokeColor, $fillColor, $backgroundColor, $textDecoration) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);
    $draw->setTextDecoration($textDecoration);
    $draw->annotation(50, 75, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(500, 200, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.settextdecoration.php
