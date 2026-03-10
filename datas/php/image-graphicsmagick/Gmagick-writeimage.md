# Gmagick::writeimage

Source: https://devdocs.io/php/gmagick.writeimage

(PECL gmagick >= Unknown)

Gmagick::writeimage — Writes an image to the specified filename

### Description

```
public Gmagick::writeimage(string $filename, bool $all_frames = false): Gmagick
```

Writes an image to the specified filename. If the filename parameter is null, the image is written to the filename set by Gmagick::readimage() or Gmagick::setimagefilename().

### Parameters

The image filename.

### Return Values

The Gmagick object.

### Errors/Exceptions

Throws an GmagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gmagick.writeimage.php
