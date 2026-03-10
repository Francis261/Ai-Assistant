# ImagickDraw::line

Source: https://devdocs.io/php/imagickdraw.line

(PECL imagick 2, PECL imagick 3)

ImagickDraw::line — Draws a line

### Description

```
public ImagickDraw::line(
 float $start_x,
 float $start_y,
 float $end_x,
 float $end_y
): bool
```

This function is currently not documented; only its argument list is available.

Draws a line on the image using the current stroke color, stroke opacity, and stroke width.

### Parameters

starting x coordinate

starting y coordinate

ending x coordinate

ending y coordinate

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::line() example

```
<?php
function line($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    $draw->line(125, 70, 100, 50);
    $draw->line(350, 170, 100, 150);

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
 https://www.php.net/manual/en/imagickdraw.line.php
