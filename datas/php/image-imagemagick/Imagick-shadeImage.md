# Imagick::shadeImage

Source: https://devdocs.io/php/imagick.shadeimage

(PECL imagick 2, PECL imagick 3)

Imagick::shadeImage — Creates a 3D effect

### Description

```
public Imagick::shadeImage(bool $gray, float $azimuth, float $elevation): bool
```

Shines a distant light on an image to create a three-dimensional effect. You control the positioning of the light with azimuth and elevation; azimuth is measured in degrees off the x axis and elevation is measured in pixels above the Z axis. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

A value other than zero shades the intensity of each pixel.

Defines the light source direction.

Defines the light source direction.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on failure.

### Examples

Example #1 Imagick::shadeImage()

```
<?php
function shadeImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->shadeImage(true, 45, 20);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.shadeimage.php
