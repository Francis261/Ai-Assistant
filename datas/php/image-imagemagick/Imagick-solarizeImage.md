# Imagick::solarizeImage

Source: https://devdocs.io/php/imagick.solarizeimage

(PECL imagick 2, PECL imagick 3)

Imagick::solarizeImage — Applies a solarizing effect to the image

### Description

```
public Imagick::solarizeImage(int $threshold): bool
```

Applies a special effect to the image, similar to the effect achieved in a photo darkroom by selectively exposing areas of photo sensitive paper to light. Threshold ranges from 0 to QuantumRange and is a measure of the extent of the solarization.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::solarizeImage()

```
<?php
function solarizeImage($imagePath, $solarizeThreshold) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->solarizeImage($solarizeThreshold * \Imagick::getQuantum());
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.solarizeimage.php
