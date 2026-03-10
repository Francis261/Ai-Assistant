# Imagick::montageImage

Source: https://devdocs.io/php/imagick.montageimage

(PECL imagick 2, PECL imagick 3)

Imagick::montageImage — Creates a composite image

### Description

```
public Imagick::montageImage(
 ImagickDraw $draw,
 string $tile_geometry,
 string $thumbnail_geometry,
 int $mode,
 string $frame
): Imagick
```

Creates a composite image by combining several separate images. The images are tiled on the composite image with the name of the image optionally appearing just below the individual tile.

### Parameters

The font name, size, and color are obtained from this object.

The number of tiles per row and page (e.g. 6x4+0+0).

Preferred image size and border size of each thumbnail (e.g. 120x120+4+3).

Thumbnail framing mode, see Montage Mode constants.

Surround the image with an ornamental border (e.g. 15x15+3+3). The frame color is that of the thumbnail's matte color.

### Return Values

Creates a composite image and returns it as a new Imagick object.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.montageimage.php
