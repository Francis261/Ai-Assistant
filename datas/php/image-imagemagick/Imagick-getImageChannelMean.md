# Imagick::getImageChannelMean

Source: https://devdocs.io/php/imagick.getimagechannelmean

(PECL imagick 2, PECL imagick 3)

Imagick::getImageChannelMean — Gets the mean and standard deviation

### Description

```
public Imagick::getImageChannelMean(int $channel): array
```

Gets the mean and standard deviation of one or more image channels.

### Parameters

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns an array with "mean" and "standardDeviation" members.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagechannelmean.php
