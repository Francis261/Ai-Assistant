# Imagick::getImageChannelKurtosis

Source: https://devdocs.io/php/imagick.getimagechannelkurtosis

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::getImageChannelKurtosis — The getImageChannelKurtosis purpose

### Description

```
public Imagick::getImageChannelKurtosis(int $channel = Imagick::CHANNEL_DEFAULT): array
```

Get the kurtosis and skewness of a specific channel. This method is available if Imagick has been compiled against ImageMagick version 6.4.9 or newer.

### Parameters

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns an array with kurtosis and skewness members.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagechannelkurtosis.php
