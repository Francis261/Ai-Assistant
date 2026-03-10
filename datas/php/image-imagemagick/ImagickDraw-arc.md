# ImagickDraw::arc

Source: https://devdocs.io/php/imagickdraw.arc

(PECL imagick 2, PECL imagick 3)

ImagickDraw::arc — Draws an arc

### Description

```
public ImagickDraw::arc(
 float $start_x,
 float $start_y,
 float $end_x,
 float $end_y,
 float $start_angle,
 float $end_angle
): bool
```

This function is currently not documented; only its argument list is available.

Draws an arc falling within a specified bounding rectangle on the image.

### Parameters

Starting x ordinate of bounding rectangle

starting y ordinate of bounding rectangle

ending x ordinate of bounding rectangle

ending y ordinate of bounding rectangle

starting degrees of rotation

ending degrees of rotation

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::arc() example

```
<?php
function arc($strokeColor, $fillColor, $backgroundColor, $startX, $startY, $endX, $endY, $startAngle, $endAngle) {

    //Create a ImagickDraw object to draw into.
    $draw = new \ImagickDraw();
    $draw->setStrokeWidth(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);

    $draw->arc($startX, $startY, $endX, $endY, $startAngle, $endAngle);

    //Create an image object which the draw commands can be rendered into
    $image = new \Imagick();
    $image->newImage(IMAGE_WIDTH, IMAGE_HEIGHT, $backgroundColor);
    $image->setImageFormat("png");

    //Render the draw commands in the ImagickDraw object 
    //into the image.
    $image->drawImage($draw);

    //Send the image to the browser
    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.arc.php
