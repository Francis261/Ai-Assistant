# Imagick::contrastStretchImage

Source: https://devdocs.io/php/imagick.contraststretchimage

(PECL imagick 2, PECL imagick 3)

Imagick::contrastStretchImage — Enhances the contrast of a color image

### Description

```
public Imagick::contrastStretchImage(float $black_point, float $white_point, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Enhances the contrast of a color image by adjusting the pixels color to span the entire range of colors available. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

The black point.

The white point.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Imagick::CHANNEL_ALL. Refer to this list of channel constants.

### Return Values

Returns true on success.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.contraststretchimage.php
