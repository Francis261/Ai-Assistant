# Imagick::paintFloodfillImage

Source: https://devdocs.io/php/imagick.paintfloodfillimage

(PECL imagick 2 >= 2.1.0, PECL imagick 3)

Imagick::paintFloodfillImage — Changes the color value of any pixel that matches target

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::paintFloodfillImage(
 mixed $fill,
 float $fuzz,
 mixed $bordercolor,
 int $x,
 int $y,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Changes the color value of any pixel that matches target and is an immediate neighbor. As of ImageMagick 6.3.8 this method has been deprecated and Imagick::floodfillPaintImage() should be used instead.

### Parameters

ImagickPixel object or a string containing the fill color

The amount of fuzz. For example, set fuzz to 10 and the color red at intensities of 100 and 102 respectively are now interpreted as the same color for the purposes of the floodfill.

ImagickPixel object or a string containing the border color

X start position of the floodfill

Y start position of the floodfill

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns true on success.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.paintfloodfillimage.php
