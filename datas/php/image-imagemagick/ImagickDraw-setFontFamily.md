# ImagickDraw::setFontFamily

Source: https://devdocs.io/php/imagickdraw.setfontfamily

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setFontFamily — Sets the font family to use when annotating with text

### Description

```
public ImagickDraw::setFontFamily(string $font_family): bool
```

This function is currently not documented; only its argument list is available.

Sets the font family to use when annotating with text.

### Parameters

the font family

### Return Values

Returns true on success.

### Examples

Example #1 ImagickDraw::setFontFamily() example

```
<?php
function setFontFamily($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $strokeColor = new \ImagickPixel($strokeColor);
    $fillColor = new \ImagickPixel($fillColor);

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);

    $draw->setFontSize(48);

    $draw->setFontFamily("Times");
    $draw->annotation(50, 50, "Lorem Ipsum!");

    $draw->setFontFamily("AvantGarde");
    $draw->annotation(50, 100, "Lorem Ipsum!");

    $draw->setFontFamily("NewCenturySchlbk");    
    $draw->annotation(50, 150, "Lorem Ipsum!");

    $draw->setFontFamily("Palatino");
    $draw->annotation(50, 200, "Lorem Ipsum!");

    $imagick = new \Imagick();
    $imagick->newImage(450, 250, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setfontfamily.php
