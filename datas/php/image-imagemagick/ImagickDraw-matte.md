# ImagickDraw::matte

Source: https://devdocs.io/php/imagickdraw.matte

(PECL imagick 2, PECL imagick 3)

ImagickDraw::matte — Paints on the image's opacity channel

### Description

```
public ImagickDraw::matte(float $x, float $y, int $paint): bool
```

This function is currently not documented; only its argument list is available.

Paints on the image's opacity channel in order to set effected pixels to transparent, to influence the opacity of pixels.

### Parameters

x coordinate of the matte

y coordinate of the matte

One of the PAINT constant (imagick::PAINT_*).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 ImagickDraw::matte() example

```
<?php
function matte($strokeColor, $fillColor, $backgroundColor, $paintType) {
    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    $draw->matte(120, 120, $paintType);    
    $draw->rectangle(100, 100, 300, 200);

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
 https://www.php.net/manual/en/imagickdraw.matte.php
