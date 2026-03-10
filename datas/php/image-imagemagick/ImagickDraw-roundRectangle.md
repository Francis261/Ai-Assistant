# ImagickDraw::roundRectangle

Source: https://devdocs.io/php/imagickdraw.roundrectangle

(PECL imagick 2, PECL imagick 3)

ImagickDraw::roundRectangle — Draws a rounded rectangle

### Description

```
public ImagickDraw::roundRectangle(
 float $top_left_x,
 float $top_left_y,
 float $bottom_right_x,
 float $bottom_right_y,
 float $rounding_x,
 float $rounding_y
): bool
```

This function is currently not documented; only its argument list is available.

Draws a rounded rectangle given two coordinates, x & y corner radiuses and using the current stroke, stroke width, and fill settings.

### Parameters

x coordinate of the top left corner

y coordinate of the top left corner

x coordinate of the bottom right

y coordinate of the bottom right

x rounding

y rounding

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::roundRectangle() example

```
<?php
function roundRectangle($strokeColor, $fillColor, $backgroundColor, $startX, $startY, $endX, $endY, $roundX, $roundY) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);

    $draw->roundRectangle($startX, $startY, $endX, $endY, $roundX, $roundY);

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
 https://www.php.net/manual/en/imagickdraw.roundrectangle.php
