# imagesetinterpolation

Source: https://devdocs.io/php/function.imagesetinterpolation

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

imagesetinterpolation — Set the interpolation method

### Description

```
imagesetinterpolation(GdImage $image, int $method = IMG_BILINEAR_FIXED): bool
```

Sets the interpolation method, setting an interpolation method affects the rendering of various functions in GD, such as the imagerotate() function.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The interpolation method, which can be one of the following:

- IMG_BELL: Bell filter.
- IMG_BESSEL: Bessel filter.
- IMG_BICUBIC: Bicubic interpolation.
- IMG_BICUBIC_FIXED: Fixed point implementation of the bicubic interpolation.
- IMG_BILINEAR_FIXED: Fixed point implementation of the bilinear interpolation (default (also on image creation)).
- IMG_BLACKMAN: Blackman window function.
- IMG_BOX: Box blur filter.
- IMG_BSPLINE: Spline interpolation.
- IMG_CATMULLROM: Cubic Hermite spline interpolation.
- IMG_GAUSSIAN: Gaussian function.
- IMG_GENERALIZED_CUBIC: Generalized cubic spline fractal interpolation.
- IMG_HERMITE: Hermite interpolation.
- IMG_HAMMING: Hamming filter.
- IMG_HANNING: Hanning filter.
- IMG_MITCHELL: Mitchell filter.
- IMG_POWER: Power interpolation.
- IMG_QUADRATIC: Inverse quadratic interpolation.
- IMG_SINC: Sinc function.
- IMG_NEAREST_NEIGHBOUR: Nearest neighbour interpolation.
- IMG_WEIGHTED4: Weighting filter.
- IMG_TRIANGLE: Triangle interpolation.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagesetinterpolation() example

```
<?php
// Load an image
$im = imagecreate(500, 500);

// By default interpolation is IMG_BILINEAR_FIXED, switch 
// to use the 'Mitchell' filter:
imagesetinterpolation($im, IMG_MITCHELL);

// Continue to work with $im ...
?>
```

### Notes

Changing the interpolation method affects the following functions when rendering:

- imageaffine()
- imagerotate()

### See Also

- imagegetinterpolation() - Get the interpolation method

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagesetinterpolation.php
