# ImagickDraw::popDefs

Source: https://devdocs.io/php/imagickdraw.popdefs

(PECL imagick 2, PECL imagick 3)

ImagickDraw::popDefs — Terminates a definition list

### Description

```
public ImagickDraw::popDefs(): bool
```

This function is currently not documented; only its argument list is available.

Terminates a definition list.

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::popDefs() example

```
<?php
function popDefs($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setstrokeOpacity(1);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);
    $draw->pushDefs();
    $draw->setStrokeColor('white');
    $draw->rectangle(50, 50, 200, 200);
    $draw->popDefs();

    $draw->rectangle(300, 50, 450, 200);

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
 https://www.php.net/manual/en/imagickdraw.popdefs.php
