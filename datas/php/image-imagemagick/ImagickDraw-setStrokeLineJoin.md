# ImagickDraw::setStrokeLineJoin

Source: https://devdocs.io/php/imagickdraw.setstrokelinejoin

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setStrokeLineJoin — Specifies the shape to be used at the corners of paths when they are stroked

### Description

```
public ImagickDraw::setStrokeLineJoin(int $linejoin): bool
```

This function is currently not documented; only its argument list is available.

Specifies the shape to be used at the corners of paths (or other vector shapes) when they are stroked.

### Parameters

One of the LINEJOIN constant (imagick::LINEJOIN_*).

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setStrokeLineJoin() example

```
<?php
function setStrokeLineJoin($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeWidth(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(20);

    $offset = 220;

    $lineJoinStyle = [
        \Imagick::LINEJOIN_MITER,
        \Imagick::LINEJOIN_ROUND,
        \Imagick::LINEJOIN_BEVEL,
        ];

    for ($x = 0; $x < count($lineJoinStyle); $x++) {
        $draw->setStrokeLineJoin($lineJoinStyle[$x]);
        $points = [
            ['x' => 40 * 5, 'y' => 10 * 5 + $x * $offset],
            ['x' => 20 * 5, 'y' => 20 * 5 + $x * $offset],
            ['x' => 70 * 5, 'y' => 50 * 5 + $x * $offset],
            ['x' => 40 * 5, 'y' => 10 * 5 + $x * $offset],
        ];

        $draw->polyline($points);
    }

    $image = new \Imagick();
    $image->newImage(500, 700, $backgroundColor);
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setstrokelinejoin.php
