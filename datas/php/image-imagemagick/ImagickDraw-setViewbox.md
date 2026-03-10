# ImagickDraw::setViewbox

Source: https://devdocs.io/php/imagickdraw.setviewbox

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setViewbox — Sets the overall canvas size

### Description

```
public ImagickDraw::setViewbox(
 int $left_x,
 int $top_y,
 int $right_x,
 int $bottom_y
): bool
```

This function is currently not documented; only its argument list is available.

Sets the overall canvas size to be recorded with the drawing vector data. Usually this will be specified using the same size as the canvas image. When the vector data is saved to SVG or MVG formats, the viewbox is use to specify the size of the canvas image that a viewer will render the vector data on.

### Parameters

left x coordinate

left y coordinate

right x coordinate

right y coordinate

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setViewBox() example

```
<?php
function setViewBox($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    /*
     
    Sets the overall canvas size to be recorded with the drawing vector data. Usually this will be specified using the same size as the canvas image. When the vector data is saved to SVG or MVG formats, the viewbox is use to specify the size of the canvas image that a viewer will render the vector data on.
    
     */

    $draw->circle(250, 250, 250, 0);
    $draw->setviewbox(0, 0, 200, 200);
    $draw->circle(125, 250, 250, 250);
    $draw->translate(250, 125);
    $draw->circle(0, 0, 125, 0);

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
 https://www.php.net/manual/en/imagickdraw.setviewbox.php
