# Imagick::setImageBias

Source: https://devdocs.io/php/imagick.setimagebias

(PECL imagick 2, PECL imagick 3)

Imagick::setImageBias — Sets the image bias for any method that convolves an image

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::setImageBias(float $bias): bool
```

Sets the image bias for any method that convolves an image (e.g. Imagick::ConvolveImage()).

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::setImageBias()

```
<?php
//requires ImageMagick version 6.9.0-1 to have an effect on convolveImage
function setImageBias($bias) {
    $imagick = new \Imagick(realpath("images/stack.jpg"));

    $xKernel = array(
        -0.70, 0, 0.70,
        -0.70, 0, 0.70,
        -0.70, 0, 0.70
    );

    $imagick->setImageBias($bias * \Imagick::getQuantum());
    $imagick->convolveImage($xKernel, \Imagick::CHANNEL_ALL);

    $imagick->setImageFormat('png');
    
    header('Content-type: image/png');
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimagebias.php
