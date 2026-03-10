# ImagickDraw::push

Source: https://devdocs.io/php/imagickdraw.push

(PECL imagick 2, PECL imagick 3)

ImagickDraw::push — Clones the current ImagickDraw and pushes it to the stack

### Description

```
public ImagickDraw::push(): bool
```

This function is currently not documented; only its argument list is available.

Clones the current ImagickDraw to create a new ImagickDraw, which is then added to the ImagickDraw stack. The original drawing ImagickDraw(s) may be returned to by invoking ImagickDraw::pop(). The ImagickDraws are stored on a ImagickDraw stack. For every Pop there must have already been an equivalent Push.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 ImagickDraw::push() example

```
<?php
function push($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillModifiedColor);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);
    $draw->push();
    $draw->translate(50, 50);
    $draw->rectangle(200, 200, 300, 300);
    $draw->pop();
    $draw->setFillColor($fillColor);
    $draw->rectangle(200, 200, 300, 300);

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
 https://www.php.net/manual/en/imagickdraw.push.php
