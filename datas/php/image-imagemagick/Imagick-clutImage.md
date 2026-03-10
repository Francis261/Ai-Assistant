# Imagick::clutImage

Source: https://devdocs.io/php/imagick.clutimage

(PECL imagick 2, PECL imagick 3)

Imagick::clutImage — Replaces colors in the image

### Description

```
public Imagick::clutImage(Imagick $lookup_table, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Replaces colors in the image from a color lookup table. Optional second parameter to replace colors in a specific channel. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

### Parameters

Imagick object containing the color lookup table

The Channeltype constant. When not supplied, default channels are replaced.

### Return Values

Returns true on success.

### Examples

Example #1 Using Imagick::clutImage():

Replace colors in the image from a color lookup table.

```
<?php
$image = new Imagick('test.jpg');
$clut = new Imagick();
$clut->newImage(1, 1, new ImagickPixel('black'));
$image->clutImage($clut);
$image->writeImage('test_out.jpg');
?>
```

### See Also

- Imagick::adaptiveBlurImage() - Adds adaptive blur filter to image
- Imagick::motionBlurImage() - Simulates motion blur
- Imagick::radialBlurImage() - Radial blurs an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.clutimage.php
