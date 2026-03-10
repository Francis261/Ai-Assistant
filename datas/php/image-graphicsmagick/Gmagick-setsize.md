# Gmagick::setsize

Source: https://devdocs.io/php/gmagick.setsize

(PECL gmagick >= Unknown)

Gmagick::setsize — Sets the size of the Gmagick object

### Description

```
public Gmagick::setsize(int $columns, int $rows): Gmagick
```

Sets the size of the Gmagick object. Set it before you read a raw image format such as Gmagick::COLORSPACE_RGB, Gmagick::COLORSPACE_GRAY, or Gmagick::COLORSPACE_CMYK.

### Parameters

The width in pixels.

The height in pixels.

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.setsize.php
