# Imagick::getImageChannelDistortions

Source: https://devdocs.io/php/imagick.getimagechanneldistortions

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::getImageChannelDistortions — Gets channel distortions

### Description

```
public Imagick::getImageChannelDistortions(Imagick $reference, int $metric, int $channel = Imagick::CHANNEL_DEFAULT): float
```

Compares one or more image channels of an image to a reconstructed image and returns the specified distortion metrics This method is available if Imagick has been compiled against ImageMagick version 6.4.4 or newer.

### Parameters

Imagick object containing the reference image

Refer to this list of metric type constants.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns a float describing the channel distortion.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.getimagechanneldistortions.php
