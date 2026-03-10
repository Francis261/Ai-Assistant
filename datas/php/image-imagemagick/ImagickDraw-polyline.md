# ImagickDraw::polyline

Source: https://devdocs.io/php/imagickdraw.polyline

(PECL imagick 2, PECL imagick 3)

ImagickDraw::polyline — Draws a polyline

### Description

```
public ImagickDraw::polyline(array $coordinates): bool
```

This function is currently not documented; only its argument list is available.

Draws a polyline using the current stroke, stroke width, and fill color or texture, using the specified array of coordinates.

### Parameters

array of x and y coordinates: array( array( 'x' => 4, 'y' => 6 ), array( 'x' => 8, 'y' => 10 ) )

### Return Values

Returns true on success.

### Examples

Example #1 ImagickDraw::polyline() example

```
<?php
function polyline($strokeColor, $fillColor, $backgroundColor) {
    $draw = new \ImagickDraw();

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(5);

    $points = [
        ['x' => 40 * 5, 'y' => 10 * 5],
        ['x' => 20 * 5, 'y' => 20 * 5],
        ['x' => 70 * 5, 'y' => 50 * 5],
        ['x' => 60 * 5, 'y' => 15 * 5]
    ];

    $draw->polyline($points);

    $image = new \Imagick();
    $image->newImage(500, 300, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.polyline.php
