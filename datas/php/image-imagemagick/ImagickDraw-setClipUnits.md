# ImagickDraw::setClipUnits

Source: https://devdocs.io/php/imagickdraw.setclipunits

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setClipUnits — Sets the interpretation of clip path units

### Description

```
public ImagickDraw::setClipUnits(int $pathunits): bool
```

This function is currently not documented; only its argument list is available.

Sets the interpretation of clip path units.

### Parameters

the number of clip units

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setClipUnits() example

```
<?php
function setClipUnits($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);
    $clipPathName = 'testClipPath';
    $draw->setClipUnits(\Imagick::RESOLUTION_PIXELSPERINCH);
    $draw->pushClipPath($clipPathName);
    $draw->rectangle(0, 0, 250, 250);
    $draw->popClipPath();
    $draw->setClipPath($clipPathName);

    //RESOLUTION_PIXELSPERINCH
    //RESOLUTION_PIXELSPERCENTIMETER

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
 https://www.php.net/manual/en/imagickdraw.setclipunits.php
