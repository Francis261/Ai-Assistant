# Imagick::radialBlurImage

Source: https://devdocs.io/php/imagick.radialblurimage

(PECL imagick 2, PECL imagick 3)

Imagick::radialBlurImage — Radial blurs an image

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::radialBlurImage(float $angle, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Radial blurs an image.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::radialBlurImage()

```
<?php
function radialBlurImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    //Blur 3 times with different radii
    $imagick->radialBlurImage(3);
    $imagick->radialBlurImage(5);
    $imagick->radialBlurImage(7);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.radialblurimage.php
