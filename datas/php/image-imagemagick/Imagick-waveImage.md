# Imagick::waveImage

Source: https://devdocs.io/php/imagick.waveimage

(PECL imagick 2, PECL imagick 3)

Imagick::waveImage — Applies wave filter to the image

### Description

```
public Imagick::waveImage(float $amplitude, float $length): bool
```

Applies a wave filter to the image. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

The amplitude of the wave.

The length of the wave.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 WaveImage can be quite slow Imagick::waveImage()

```
<?php
function waveImage($imagePath, $amplitude, $length) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->waveImage($amplitude, $length);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

### See Also

- Imagick::solarizeImage() - Applies a solarizing effect to the image
- Imagick::oilpaintImage() - Simulates an oil painting
- Imagick::embossImage() - Returns a grayscale image with a three-dimensional effect
- Imagick::addNoiseImage() - Adds random noise to the image
- Imagick::swirlImage() - Swirls the pixels about the center of the image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.waveimage.php
