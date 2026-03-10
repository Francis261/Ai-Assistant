# Imagick::getImageType

Source: https://devdocs.io/php/imagick.getimagetype

(PECL imagick 2, PECL imagick 3)

Imagick::getImageType — Gets the potential image type

### Description

```
public Imagick::getImageType(): int
```

Gets the potential image type.

### Parameters

This function has no parameters.

### Return Values

Returns the potential image type.

- imagick::IMGTYPE_UNDEFINED
- imagick::IMGTYPE_BILEVEL
- imagick::IMGTYPE_GRAYSCALE
- imagick::IMGTYPE_GRAYSCALEMATTE
- imagick::IMGTYPE_PALETTE
- imagick::IMGTYPE_PALETTEMATTE
- imagick::IMGTYPE_TRUECOLOR
- imagick::IMGTYPE_TRUECOLORMATTE
- imagick::IMGTYPE_COLORSEPARATION
- imagick::IMGTYPE_COLORSEPARATIONMATTE
- imagick::IMGTYPE_OPTIMIZE

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagetype.php
