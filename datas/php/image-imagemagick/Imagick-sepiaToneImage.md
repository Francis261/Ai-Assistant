# Imagick::sepiaToneImage

Source: https://devdocs.io/php/imagick.sepiatoneimage

(PECL imagick 2, PECL imagick 3)

Imagick::sepiaToneImage — Sepia tones an image

### Description

```
public Imagick::sepiaToneImage(float $threshold): bool
```

Applies a special effect to the image, similar to the effect achieved in a photo darkroom by sepia toning. Threshold ranges from 0 to QuantumRange and is a measure of the extent of the sepia toning. A threshold of 80 is a good starting point for a reasonable tone.

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::sepiaToneImage()

```
<?php
function sepiaToneImage($imagePath, $sepia) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->sepiaToneImage($sepia);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.sepiatoneimage.php
