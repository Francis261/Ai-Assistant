# Imagick::adaptiveSharpenImage

Source: https://devdocs.io/php/imagick.adaptivesharpenimage

(PECL imagick 2, PECL imagick 3)

Imagick::adaptiveSharpenImage — Adaptively sharpen the image

### Description

```
public Imagick::adaptiveSharpenImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Adaptively sharpen the image by sharpening more intensely near image edges and less intensely far from edges. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

The radius of the Gaussian, in pixels, not counting the center pixel. Use 0 for auto-select.

The standard deviation of the Gaussian, in pixels.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns true on success.

### Examples

Example #1 A Imagick::adaptiveSharpenImage() example

Adaptively sharpen the image with radius 2 and sigma 1.

```
<?php
try {
    $image = new Imagick('image.png');
    $image->adaptiveSharpenImage(2,1);
} catch(ImagickException $e) {
    echo 'Error: ' , $e->getMessage();
    die();
}
header('Content-type: image/png');
echo $image;
?>
```

### See Also

- Imagick::sharpenImage() - Sharpens an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.adaptivesharpenimage.php
