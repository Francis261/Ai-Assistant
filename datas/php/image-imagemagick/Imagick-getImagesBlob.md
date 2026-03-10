# Imagick::getImagesBlob

Source: https://devdocs.io/php/imagick.getimagesblob

(PECL imagick 2, PECL imagick 3)

Imagick::getImagesBlob — Returns all image sequences as a blob

### Description

```
public Imagick::getImagesBlob(): string
```

Implements direct to memory image formats. It returns all image sequences as a string. The format of the image determines the format of the returned blob (GIF, JPEG, PNG, etc.). To return a different image format, use Imagick::setImageFormat().

### Parameters

This function has no parameters.

### Return Values

Returns a string containing the images. On failure, throws ImagickException.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagesblob.php
