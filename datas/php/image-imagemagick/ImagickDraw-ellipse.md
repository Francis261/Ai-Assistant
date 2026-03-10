# ImagickDraw::ellipse

Source: https://devdocs.io/php/imagickdraw.ellipse

(PECL imagick 2, PECL imagick 3)

ImagickDraw::ellipse — Draws an ellipse on the image

### Description

```
public ImagickDraw::ellipse(
 float $origin_x,
 float $origin_y,
 float $radius_x,
 float $radius_y,
 float $angle_start,
 float $angle_end
): bool
```

This function is currently not documented; only its argument list is available.

Draws an ellipse on the image.

### Parameters

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::ellipse() example

```
<?php
function ellipse($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    $draw->ellipse(125, 70, 100, 50, 0, 360);
    $draw->ellipse(350, 70, 100, 50, 0, 315);

    $draw->push();
    $draw->translate(125, 250);
    $draw->rotate(30);
    $draw->ellipse(0, 0, 100, 50, 0, 360);
    $draw->pop();

    $draw->push();
    $draw->translate(350, 250);
    $draw->rotate(30);
    $draw->ellipse(0, 0, 100, 50, 0, 315);
    $draw->pop();

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
 https://www.php.net/manual/en/imagickdraw.ellipse.php
