# Imagick::sigmoidalContrastImage

Source: https://devdocs.io/php/imagick.sigmoidalcontrastimage

(PECL imagick 2, PECL imagick 3)

Imagick::sigmoidalContrastImage — Adjusts the contrast of an image

### Description

```
public Imagick::sigmoidalContrastImage(
 bool $sharpen,
 float $alpha,
 float $beta,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Adjusts the contrast of an image with a non-linear sigmoidal contrast algorithm. Increase the contrast of the image using a sigmoidal transfer function without saturating highlights or shadows. Contrast indicates how much to increase the contrast (0 is none; 3 is typical; 20 is pushing it); mid-point indicates where midtones fall in the resultant image (0 is white; 50 is middle-gray; 100 is black). Set sharpen to true to increase the image contrast otherwise the contrast is reduced.

See also » ImageMagick v6 Examples - Image Transformations — Sigmoidal Non-linearity Contrast

### Parameters

If true increase the contrast, if false decrease the contrast.

The amount of contrast to apply. 1 is very little, 5 is a significant amount, 20 is extreme.

Where the midpoint of the gradient will be. This value should be in the range 0 to 1 - mutliplied by the quantum value for ImageMagick.

Which color channels the contrast will be applied to.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Create a gradient image using Imagick::sigmoidalContrastImage() suitable for blending two images together smoothly, with the blending defined by $contrast and $the midpoint

```
<?php

function generateBlendImage($width, $height, $contrast = 10, $midpoint = 0.5) {
    $imagick = new Imagick();
    $imagick->newPseudoImage($width, $height, 'gradient:black-white');
    $quanta = $imagick->getQuantumRange();
    $imagick->sigmoidalContrastImage(true, $contrast, $midpoint * $quanta["quantumRangeLong"]);

    return $imagick; 
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.sigmoidalcontrastimage.php
