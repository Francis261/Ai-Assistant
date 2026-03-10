# Imagick::convolveImage

Source: https://devdocs.io/php/imagick.convolveimage

(PECL imagick 2, PECL imagick 3)

Imagick::convolveImage — Applies a custom convolution kernel to the image

### Description

```
public Imagick::convolveImage(array $kernel, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Applies a custom convolution kernel to the image.

### Parameters

The convolution kernel

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::convolveImage()

```
<?php
function convolveImage($imagePath, $bias, $kernelMatrix) {
    $imagick = new \Imagick(realpath($imagePath));    
    //$edgeFindingKernel = [-1, -1, -1, -1, 8, -1, -1, -1, -1,];
    $imagick->setImageBias($bias * \Imagick::getQuantum());
    $imagick->convolveImage($kernelMatrix);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.convolveimage.php
