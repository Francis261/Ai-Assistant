# ImagickDraw::setTextAlignment

Source: https://devdocs.io/php/imagickdraw.settextalignment

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setTextAlignment — Specifies a text alignment

### Description

```
public ImagickDraw::setTextAlignment(int $align): bool
```

This function is currently not documented; only its argument list is available.

Specifies a text alignment to be applied when annotating with text.

### Parameters

One of the ALIGN constant (imagick::ALIGN_*).

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setTextAlignment() example

```
<?php
function setTextAlignment($strokeColor, $fillColor, $backgroundColor) {
    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(1);
    $draw->setFontSize(36);

    $draw->setTextAlignment(\Imagick::ALIGN_LEFT);
    $draw->annotation(250, 75, "Lorem Ipsum!");
    $draw->setTextAlignment(\Imagick::ALIGN_CENTER);
    $draw->annotation(250, 150, "Lorem Ipsum!");
    $draw->setTextAlignment(\Imagick::ALIGN_RIGHT);
    $draw->annotation(250, 225, "Lorem Ipsum!");
    $draw->line(250, 0, 250, 500);

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
 https://www.php.net/manual/en/imagickdraw.settextalignment.php
