# Imagick::paintOpaqueImage

Source: https://devdocs.io/php/imagick.paintopaqueimage

(PECL imagick 2, PECL imagick 3)

Imagick::paintOpaqueImage — Change any pixel that matches color

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::paintOpaqueImage(
 mixed $target,
 mixed $fill,
 float $fuzz,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Changes any pixel that matches color with the color defined by fill.

### Parameters

Change this target color to the fill color within the image. An ImagickPixel object or a string representing the target color.

An ImagickPixel object or a string representing the fill color.

The fuzz member of image defines how much tolerance is acceptable to consider two colors as the same.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.paintopaqueimage.php
