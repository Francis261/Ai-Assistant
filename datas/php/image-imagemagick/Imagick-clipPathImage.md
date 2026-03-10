# Imagick::clipPathImage

Source: https://devdocs.io/php/imagick.clippathimage

(PECL imagick 2, PECL imagick 3)

Imagick::clipPathImage — Clips along the named paths from the 8BIM profile

### Description

```
public Imagick::clipPathImage(string $pathname, bool $inside): bool
```

Clips along the named paths from the 8BIM profile, if present. Later operations take effect inside the path. It may be a number if preceded with #, to work on a numbered path, e.g., "#1" to use the first path.

### Parameters

The name of the path

If true later operations take effect inside clipping path. Otherwise later operations take effect outside clipping path.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.clippathimage.php
