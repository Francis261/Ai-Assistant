# Imagick::getImageChannelExtrema

Source: https://devdocs.io/php/imagick.getimagechannelextrema

(PECL imagick 2, PECL imagick 3)

Imagick::getImageChannelExtrema — Gets the extrema for one or more image channels

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::getImageChannelExtrema(int $channel): array
```

Gets the extrema for one or more image channels. Return value is an associative array with the keys "minima" and "maxima".

### Parameters

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagechannelextrema.php
