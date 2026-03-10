# Imagick::getImageGravity

Source: https://devdocs.io/php/imagick.getimagegravity

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::getImageGravity — Gets the image gravity

### Description

```
public Imagick::getImageGravity(): int
```

Gets the current gravity value of the image. Unlike Imagick::getGravity(), this method returns the gravity defined for the current image sequence. This method is available if Imagick has been compiled against ImageMagick version 6.4.4 or newer.

### Parameters

This function has no parameters.

### Return Values

Returns the images gravity property. Refer to the list of gravity constants.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagegravity.php
