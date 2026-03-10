# ImagickDraw::rectangle

Source: https://devdocs.io/php/imagickdraw.rectangle

(PECL imagick 2, PECL imagick 3)

ImagickDraw::rectangle — Draws a rectangle

### Description

```
public ImagickDraw::rectangle(
 float $top_left_x,
 float $top_left_y,
 float $bottom_right_x,
 float $bottom_right_y
): bool
```

This function is currently not documented; only its argument list is available.

Draws a rectangle given two coordinates and using the current stroke, stroke width, and fill settings.

### Parameters

x coordinate of the top left corner

y coordinate of the top left corner

x coordinate of the bottom right corner

y coordinate of the bottom right corner

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::rectangle() example

```
<?php
function rectangle($strokeColor, $fillColor, $backgroundColor) {
    $draw = new \ImagickDraw();
    $strokeColor = new \ImagickPixel($strokeColor);
    $fillColor = new \ImagickPixel($fillColor);

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);

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
 https://www.php.net/manual/en/imagickdraw.rectangle.php
