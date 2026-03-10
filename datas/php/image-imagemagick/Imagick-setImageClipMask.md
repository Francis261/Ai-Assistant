# Imagick::setImageClipMask

Source: https://devdocs.io/php/imagick.setimageclipmask

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::setImageClipMask — Sets image clip mask

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::setImageClipMask(Imagick $clip_mask): bool
```

Sets image clip mask from another Imagick object. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

### Parameters

The Imagick object containing the clip mask

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::setImageClipMask()

```
<?php
function setImageClipMask($imagePath) {
    $imagick = new \Imagick();
    $imagick->readImage(realpath($imagePath));

    $width = $imagick->getImageWidth();
    $height = $imagick->getImageHeight();

    $clipMask = new \Imagick();
    $clipMask->newPseudoImage(
        $width,
        $height,
        "canvas:transparent"
    );

    $draw = new \ImagickDraw();
    $draw->setFillColor('white');
    $draw->circle(
        $width / 2,
        $height / 2,
        ($width / 2) + ($width / 4),
        $height / 2
    );
    $clipMask->drawImage($draw);
    $imagick->setImageClipMask($clipMask);

    $imagick->negateImage(false);
    $imagick->setFormat("png");

    header("Content-Type: image/png");
    echo $imagick->getImagesBlob();
    
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimageclipmask.php
