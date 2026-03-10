# Imagick::compareImageChannels

Source: https://devdocs.io/php/imagick.compareimagechannels

(PECL imagick 2, PECL imagick 3)

Imagick::compareImageChannels — Returns the difference in one or more images

### Description

```
public Imagick::compareImageChannels(Imagick $image, int $channelType, int $metricType): array
```

Compares one or more images and returns the difference image.

### Parameters

Imagick object containing the image to compare.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

One of the metric type constants.

### Return Values

Array consisting of new_wand and distortion.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.compareimagechannels.php
