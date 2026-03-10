# Imagick::setImageAlphaChannel

Source: https://devdocs.io/php/imagick.setimagealphachannel

(PECL imagick 2 >= 2.1.0, PECL imagick 3)

Imagick::setImageAlphaChannel — Sets image alpha channel

### Description

```
public Imagick::setImageAlphaChannel(int $mode): bool
```

Activate or deactivate image alpha channel. The mode is one of the Imagick::ALPHACHANNEL_* constants. This method is available if Imagick has been compiled against ImageMagick version 6.3.8 or newer.

### Parameters

One of the Imagick::ALPHACHANNEL_* constants

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### See Also

- Imagick::setImageMatte() - Sets the image matte channel
- Imagick Alpha Channel Constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimagealphachannel.php
