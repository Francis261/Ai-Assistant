# Gmagick::medianfilterimage

Source: https://devdocs.io/php/gmagick.medianfilterimage

(PECL gmagick >= Unknown)

Gmagick::medianfilterimage — Applies a digital filter

### Description

```
public Gmagick::medianfilterimage(float $radius): void
```

Applies a digital filter that improves the quality of a noisy image. Each pixel is replaced by the median in a set of neighboring pixels as defined by radius.

### Parameters

The radius of the pixel neighborhood.

### Return Values

Gmagick object with median filter applied.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.medianfilterimage.php
