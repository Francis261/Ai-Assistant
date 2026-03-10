# Imagick::uniqueImageColors

Source: https://devdocs.io/php/imagick.uniqueimagecolors

(PECL imagick 2,PECL imagick 3)

Imagick::uniqueImageColors — Discards all but one of any pixel color

### Description

```
public Imagick::uniqueImageColors(): bool
```

Discards all but one of any pixel color. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

This function has no parameters.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::uniqueImageColors()

```
<?php
function uniqueImageColors($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    //Reduce the image to 256 colours nicely.
    $imagick->quantizeImage(256, \Imagick::COLORSPACE_YIQ, 0, false, false);
    $imagick->uniqueImageColors();
    $imagick->scaleimage($imagick->getImageWidth(), $imagick->getImageHeight() * 20);
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.uniqueimagecolors.php
