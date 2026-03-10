# Imagick::remapImage

Source: https://devdocs.io/php/imagick.remapimage

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::remapImage — Remaps image colors

### Description

```
public Imagick::remapImage(Imagick $replacement, int $DITHER): bool
```

Replaces colors an image with those defined by replacement. The colors are replaced with the closest possible color. This method is available if Imagick has been compiled against ImageMagick version 6.4.5 or newer.

### Parameters

An Imagick object containing the replacement colors

Refer to this list of dither method constants

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.remapimage.php
