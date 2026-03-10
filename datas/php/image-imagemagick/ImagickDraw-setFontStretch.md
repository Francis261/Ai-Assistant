# ImagickDraw::setFontStretch

Source: https://devdocs.io/php/imagickdraw.setfontstretch

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFontStretch — Sets the font stretch to use when annotating with text

### Description

```
public ImagickDraw::setFontStretch(int $stretch): bool
```

This function is currently not documented; only its argument list is available.

Sets the font stretch to use when annotating with text. The AnyStretch enumeration acts as a wild-card "don't care" option.

### Parameters

One of the STRETCH constant (imagick::STRETCH_*).

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setFontStretch() example

```
<?php
function setFontStretch($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);
    $draw->setFontSize(36);

    $fontStretchTypes = [
        \Imagick::STRETCH_ULTRACONDENSED, 
        \Imagick::STRETCH_CONDENSED, 
        \Imagick::STRETCH_SEMICONDENSED, 
        \Imagick::STRETCH_SEMIEXPANDED, 
        \Imagick::STRETCH_EXPANDED, 
        \Imagick::STRETCH_EXTRAEXPANDED, 
        \Imagick::STRETCH_ULTRAEXPANDED, 
        \Imagick::STRETCH_ANY
    ];

    $offset = 0;
    foreach ($fontStretchTypes as $fontStretch) {
        $draw->setFontStretch($fontStretch);
        $draw->annotation(50, 75 + $offset, "Lorem Ipsum!");
        $offset += 50;
    }

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
 https://www.php.net/manual/en/imagickdraw.setfontstretch.php
