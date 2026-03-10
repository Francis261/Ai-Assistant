# Imagick::getImageChannelRange

Source: https://devdocs.io/php/imagick.getimagechannelrange

(PECL imagick 2 >= 2.2.1, PECL imagick 3)

Imagick::getImageChannelRange — Gets channel range

### Description

```
public Imagick::getImageChannelRange(int $channel): array
```

Gets the range for one or more image channels. This method is available if Imagick has been compiled against ImageMagick version 6.4.0 or newer.

### Parameters

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns an array containing minima and maxima values of the channel(s).

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagechannelrange.php
