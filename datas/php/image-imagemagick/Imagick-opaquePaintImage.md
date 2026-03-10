# Imagick::opaquePaintImage

Source: https://devdocs.io/php/imagick.opaquepaintimage

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::opaquePaintImage — Changes the color value of any pixel that matches target

### Description

```
public Imagick::opaquePaintImage(
 mixed $target,
 mixed $fill,
 float $fuzz,
 bool $invert,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Changes any pixel that matches color with the color defined by fill. This method is available if Imagick has been compiled against ImageMagick version 6.3.8 or newer.

### Parameters

ImagickPixel object or a string containing the color to change

The replacement color

The amount of fuzz. For example, set fuzz to 10 and the color red at intensities of 100 and 102 respectively are now interpreted as the same color.

If true paints any pixel that does not match the target color.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns true on success.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.opaquepaintimage.php
