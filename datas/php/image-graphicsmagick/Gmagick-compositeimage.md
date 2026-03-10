# Gmagick::compositeimage

Source: https://devdocs.io/php/gmagick.compositeimage

(PECL gmagick >= Unknown)

Gmagick::compositeimage — Composite one image onto another

### Description

```
public Gmagick::compositeimage(
 Gmagick $source,
 int $COMPOSE,
 int $x,
 int $y
): Gmagick
```

Composite one image onto another at the specified offset.

### Parameters

Gmagick object which holds the composite image.

Composite operator.

The column offset of the composited image.

The row offset of the composited image.

### Return Values

The Gmagick object with compositions.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.compositeimage.php
