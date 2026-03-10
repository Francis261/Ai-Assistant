# Imagick::writeImagesFile

Source: https://devdocs.io/php/imagick.writeimagesfile

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::writeImagesFile — Writes frames to a filehandle

### Description

```
public Imagick::writeImagesFile(resource $filehandle, string $format = ?): bool
```

Writes all image frames into an open filehandle. This method can be used to write animated gifs or other multiframe images into open filehandle. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

### Parameters

Filehandle where to write the images.

The image format. The list of valid format specifiers depends on the compiled feature set of ImageMagick, and can be queried at runtime via Imagick::queryFormats().

### Return Values

Returns true on success.

### See Also

- Imagick::queryFormats() - Returns formats supported by Imagick

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.writeimagesfile.php
