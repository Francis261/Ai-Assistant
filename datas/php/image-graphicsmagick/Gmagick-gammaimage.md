# Gmagick::gammaimage

Source: https://devdocs.io/php/gmagick.gammaimage

(PECL gmagick >= Unknown)

Gmagick::gammaimage — Gamma-corrects an image

### Description

```
public Gmagick::gammaimage(float $gamma): Gmagick
```

Gamma-corrects an image. The same image viewed on different devices will have perceptual differences in the way the image's intensities are represented on the screen. Specify individual gamma levels for the red, green, and blue channels, or adjust all three with the gamma parameter. Values typically range from 0.8 to 2.3.

### Parameters

The amount of gamma-correction.

### Return Values

The gamma corrected Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.gammaimage.php
