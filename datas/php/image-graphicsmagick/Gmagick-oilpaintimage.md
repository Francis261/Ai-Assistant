# Gmagick::oilpaintimage

Source: https://devdocs.io/php/gmagick.oilpaintimage

(PECL gmagick >= Unknown)

Gmagick::oilpaintimage — Simulates an oil painting

### Description

```
public Gmagick::oilpaintimage( float $radius ): Gmagick
```

Applies a special effect filter that simulates an oil painting. Each pixel is replaced by the most frequent color occurring in a circular region defined by radius.

### Parameters

The radius of the circular neighborhood.

### Return Values

The Gmagick object on success

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.oilpaintimage.php
