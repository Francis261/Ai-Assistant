# Gmagick::trimimage

Source: https://devdocs.io/php/gmagick.trimimage

(PECL gmagick >= Unknown)

Gmagick::trimimage — Remove edges from the image

### Description

```
public Gmagick::trimimage(float $fuzz): Gmagick
```

Remove edges that are the background color from the image.

### Parameters

By default target must match a particular pixel color exactly. However, in many cases two colors may differ by a small amount. The fuzz member of image defines how much tolerance is acceptable to consider two colors as the same. This parameter represents the variation on the quantum range.

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.trimimage.php
