# Gmagick::embossimage

Source: https://devdocs.io/php/gmagick.embossimage

(PECL gmagick >= Unknown)

Gmagick::embossimage — Returns a grayscale image with a three-dimensional effect

### Description

```
public Gmagick::embossimage(float $radius, float $sigma): Gmagick
```

Returns a grayscale image with a three-dimensional effect. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and it will choose a suitable radius for you.

### Parameters

The radius of the effect.

The sigma of the effect.

### Return Values

The embossed Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.embossimage.php
