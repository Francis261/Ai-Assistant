# ImagickDraw::polygon

Source: https://devdocs.io/php/imagickdraw.polygon

(PECL imagick 2, PECL imagick 3)

ImagickDraw::polygon — Draws a polygon

### Description

```
public ImagickDraw::polygon(array $coordinates): bool
```

This function is currently not documented; only its argument list is available.

Draws a polygon using the current stroke, stroke width, and fill color or texture, using the specified array of coordinates.

### Parameters

multidimensional array like array( array( 'x' => 3, 'y' => 4 ), array( 'x' => 2, 'y' => 6 ) );

### Return Values

Returns true on success.

### Examples

Example #1 ImagickDraw::polygon() example

```
<?php
function polygon($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeWidth(4);

    $draw->setFillColor($fillColor);

    $points = [
        ['x' => 40 * 5, 'y' => 10 * 5],
        ['x' => 20 * 5, 'y' => 20 * 5], 
        ['x' => 70 * 5, 'y' => 50 * 5], 
        ['x' => 60 * 5, 'y' => 15 * 5],
    ];

    $draw->polygon($points);

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
 https://www.php.net/manual/en/imagickdraw.polygon.php
