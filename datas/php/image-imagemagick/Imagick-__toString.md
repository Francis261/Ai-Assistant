# Imagick::__toString

Source: https://devdocs.io/php/imagick.tostring

(PECL imagick 2, PECL imagick 3)

Imagick::__toString — Returns the image as a string

### Description

```
public Imagick::__toString(): string
```

Returns the current image as string. This will only return a single image; it should not be used for Imagick objects that contain multiple images e.g. an animated GIF or PDF with multiple pages.

### Parameters

This function has no parameters.

### Return Values

Returns the string content on success or an empty string on failure.

### See Also

- Imagick::getImageBlob() - Returns the image sequence as a blob
- Imagick::getImagesBlob() - Returns all image sequences as a blob

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.tostring.php
