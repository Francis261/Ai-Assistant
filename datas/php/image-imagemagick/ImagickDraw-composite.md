# ImagickDraw::composite

Source: https://devdocs.io/php/imagickdraw.composite

(PECL imagick 2, PECL imagick 3)

ImagickDraw::composite — Composites an image onto the current image

### Description

```
public ImagickDraw::composite(
 int $composite,
 float $x,
 float $y,
 float $width,
 float $height,
 Imagick $image
): bool
```

This function is currently not documented; only its argument list is available.

Composites an image onto the current image, using the specified composition operator, specified position, and at the specified size.

### Parameters

composition operator. One of the Composite Operator constant (imagick::COMPOSITE_*).

x coordinate of the top left corner.

y coordinate of the top left corner.

width of the composition image.

height of the composition image.

the Imagick object where composition image is taken from.

### Return Values

Returns true on success.

### Examples

Example #1 ImagickDraw::composite() example

```
<?php
function composite($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setFillOpacity(1);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeWidth(2);
    $draw->setFont("../fonts/CANDY.TTF");
    $draw->setFontSize(140);
    $draw->rectangle(0, 0, 1000, 300);
    $draw->setFillColor('white');
    $draw->setfillopacity(1);
    $draw->annotation(50, 180, "Lorem Ipsum!");

    //Create an image object which the draw commands can be rendered into
    $imagick = new \Imagick();
    $imagick->newImage(1000, 302, $backgroundColor);
    $imagick->setImageFormat("png");

    //Render the draw commands in the ImagickDraw object 
    //into the image.
    $imagick->drawImage($draw);

    //Send the image to the browser
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.composite.php
