# Imagick::brightnessContrastImage

Source: https://devdocs.io/php/imagick.brightnesscontrastimage

(PECL imagick 3 >= 3.3.0)

Imagick::brightnessContrastImage — Change the brightness and/or contrast of an image

### Description

```
public Imagick::brightnessContrastImage(float $brightness, float $contrast, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Change the brightness and/or contrast of an image. It converts the brightness and contrast parameters into slope and intercept and calls a polynomical function to apply to the image.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::brightnessContrastImage()

```
<?php
function brightnessContrastImage($imagePath, $brightness, $contrast, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->brightnessContrastImage($brightness, $contrast, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.brightnesscontrastimage.php
