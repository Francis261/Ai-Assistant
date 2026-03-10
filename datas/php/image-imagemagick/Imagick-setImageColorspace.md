# Imagick::setImageColorspace

Source: https://devdocs.io/php/imagick.setimagecolorspace

(PECL imagick 2, PECL imagick 3)

Imagick::setImageColorspace — Sets the image colorspace

### Description

```
public Imagick::setImageColorspace(int $colorspace): bool
```

Sets the image colorspace. This method should be used when creating new images. To change the colorspace of an existing image, you should use Imagick::transformImageColorspace().

### Parameters

One of the COLORSPACE constants

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimagecolorspace.php
