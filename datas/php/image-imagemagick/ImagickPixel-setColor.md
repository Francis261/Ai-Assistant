# ImagickPixel::setColor

Source: https://devdocs.io/php/imagickpixel.setcolor

(PECL imagick 2, PECL imagick 3)

ImagickPixel::setColor — Sets the color

### Description

```
public ImagickPixel::setColor(string $color): bool
```

This function is currently not documented; only its argument list is available.

Sets the color described by the ImagickPixel object, with a string (e.g. "blue", "#0000ff", "rgb(0,0,255)", "cmyk(100,100,100,10)", etc.).

### Parameters

The color definition to use in order to initialise the ImagickPixel object.

### Return Values

Returns true if the specified color was set, false otherwise.

### Examples

Example #1 ImagickPixel::setColor()

```
<?php
function setColor() {
    $draw = new \ImagickDraw();

    $strokeColor = new \ImagickPixel('green');
    $fillColor = new \ImagickPixel();
    $fillColor->setColor('rgba(100%, 75%, 0%, 1.0)');

    $draw->setstrokewidth(3.0);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->rectangle(200, 200, 300, 300);

    $image = new \Imagick();
    $image->newImage(500, 500, "SteelBlue2");
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.setcolor.php
