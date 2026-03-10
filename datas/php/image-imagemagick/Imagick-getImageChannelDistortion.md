# Imagick::getImageChannelDistortion

Source: https://devdocs.io/php/imagick.getimagechanneldistortion

(PECL imagick 2, PECL imagick 3)

Imagick::getImageChannelDistortion — Compares image channels of an image to a reconstructed image

### Description

```
public Imagick::getImageChannelDistortion(Imagick $reference, int $channel, int $metric): float
```

Compares one or more image channels of an image to a reconstructed image and returns the specified distortion metric.

### Parameters

Imagick object to compare to.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

One of the metric type constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagechanneldistortion.php
