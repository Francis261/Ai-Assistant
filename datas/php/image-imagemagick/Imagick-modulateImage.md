# Imagick::modulateImage

Source: https://devdocs.io/php/imagick.modulateimage

(PECL imagick 2, PECL imagick 3)

Imagick::modulateImage — Control the brightness, saturation, and hue

### Description

```
public Imagick::modulateImage(float $brightness, float $saturation, float $hue): bool
```

Lets you control the brightness, saturation, and hue of an image. Hue is the percentage of absolute rotation from the current position. For example 50 results in a counter-clockwise rotation of 90 degrees, 150 results in a clockwise rotation of 90 degrees, with 0 and 200 both resulting in a rotation of 180 degrees.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::modulateImage()

```
<?php
function modulateImage($imagePath, $hue, $brightness, $saturation) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->modulateImage($brightness, $saturation, $hue);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.modulateimage.php
