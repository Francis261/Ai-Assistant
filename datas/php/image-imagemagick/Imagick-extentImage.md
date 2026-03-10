# Imagick::extentImage

Source: https://devdocs.io/php/imagick.extentimage

(PECL imagick 2, PECL imagick 3)

Imagick::extentImage — Set image size

### Description

```
public Imagick::extentImage(
 int $width,
 int $height,
 int $x,
 int $y
): bool
```

Comfortability method for setting image size. The method sets the image size and allows setting x,y coordinates where the new area begins. This method is available if Imagick has been compiled against ImageMagick version 6.3.1 or newer.

Prior to ImageMagick 6.5.7-8 (1623), $x was positive when shifting to the left and negative when shifting to the right, and $y was positive when shifting an image up and negative when shifting an image down. Somewhere betwen ImageMagick 6.3.7 (1591) and ImageMagick 6.5.7-8 (1623), the axes of $x and $y were flipped, so that $x was negative when shifting to the left and positive when shifting to the right, and $y was negative when shifting an image up and positive when shifting an image down. Somewhere between ImageMagick 6.5.7-8 (1623) and ImageMagick 6.6.9-7 (1641), the axes of $x and $y were flipped back to pre-ImageMagick 6.5.7-8 (1623) functionality.

### Parameters

The new width

The new height

X position for the new size

Y position for the new size

### Return Values

Returns true on success.

### See Also

- Imagick::resizeImage() - Scales an image
- Imagick::thumbnailImage() - Changes the size of an image
- Imagick::cropImage() - Extracts a region of the image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.extentimage.php
