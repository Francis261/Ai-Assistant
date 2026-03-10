# Imagick::filter

Source: https://devdocs.io/php/imagick.filter

(PECL imagick 3 >= 3.3.0)

Imagick::filter — Applies a custom convolution kernel to the image

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::filter(ImagickKernel $ImagickKernel, int $channel = Imagick::CHANNEL_UNDEFINED): bool
```

Applies a custom convolution kernel to the image.

### Parameters

An instance of ImagickKernel that represents either a single kernel or a linked series of kernels.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::filter()

```
<?php
function filter($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $matrix = [
        [-1, 0, -1],
        [0,  5,  0],
        [-1, 0, -1],
    ];
    
    $kernel = \ImagickKernel::fromMatrix($matrix);
    $strength = 0.5;    
    $kernel->scale($strength, \Imagick::NORMALIZE_KERNEL_VALUE);    
    $kernel->addUnityKernel(1 - $strength);

    $imagick->filter($kernel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.filter.php
