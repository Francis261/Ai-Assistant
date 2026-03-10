# Imagick::setSizeOffset

Source: https://devdocs.io/php/imagick.setsizeoffset

(PECL imagick 2, PECL imagick 3)

Imagick::setSizeOffset — Sets the size and offset of the Imagick object

### Description

```
public Imagick::setSizeOffset(int $columns, int $rows, int $offset): bool
```

Sets the size and offset of the Imagick object. Set it before you read a raw image format such as RGB, GRAY, or CMYK. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

The width in pixels.

The height in pixels.

The image offset.

### Return Values

Returns true on success.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setsizeoffset.php
