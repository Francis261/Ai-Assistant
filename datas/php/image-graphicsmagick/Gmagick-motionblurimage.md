# Gmagick::motionblurimage

Source: https://devdocs.io/php/gmagick.motionblurimage

(PECL gmagick >= Unknown)

Gmagick::motionblurimage — Simulates motion blur

### Description

```
public Gmagick::motionblurimage(float $radius, float $sigma, float $angle): Gmagick
```

Simulates motion blur. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and Gmagick::motionblurimage() selects a suitable radius for you. Angle gives the angle of the blurring motion.

### Parameters

The radius of the Gaussian, in pixels, not counting the center pixel.

The standard deviation of the Gaussian, in pixels.

Apply the effect along this angle.

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.motionblurimage.php
