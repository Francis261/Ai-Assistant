# Imagick::writeImage

Source: https://devdocs.io/php/imagick.writeimage

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::writeImage — Writes an image to the specified filename

### Description

```
public Imagick::writeImage(string $filename = NULL): bool
```

Writes an image to the specified filename. If the filename parameter is NULL, the image is written to the filename set by Imagick::readImage() or Imagick::setImageFilename().

### Parameters

Filename where to write the image. The extension of the filename defines the type of the file. Format can be forced regardless of file extension using format: prefix, for example "jpg:test.png".

### Return Values

Returns true on success.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.writeimage.php
