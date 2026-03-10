# ImagickDraw::setStrokeDashOffset

Source: https://devdocs.io/php/imagickdraw.setstrokedashoffset

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeDashOffset — Specifies the offset into the dash pattern to start the dash

### Description

```
public ImagickDraw::setStrokeDashOffset(float $dash_offset): bool
```

This function is currently not documented; only its argument list is available.

Specifies the offset into the dash pattern to start the dash.

### Parameters

dash offset

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setStrokeDashOffset() example

```
<?php
function setStrokeDashOffset($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(4);
    $draw->setStrokeDashArray([20, 20]);
    $draw->setStrokeDashOffset(0);
    $draw->rectangle(100, 50, 225, 175);

    //Start the dash effect halfway through the solid portion
    $draw->setStrokeDashOffset(10);
    $draw->rectangle(275, 50, 400, 175);

    //Start the dash effect on the space portion
    $draw->setStrokeDashOffset(20);
    $draw->rectangle(100, 200, 225, 350);
    $draw->setStrokeDashOffset(5);
    $draw->rectangle(275, 200, 400, 350);

    $image = new \Imagick();
    $image->newImage(500, 400, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setstrokedashoffset.php
