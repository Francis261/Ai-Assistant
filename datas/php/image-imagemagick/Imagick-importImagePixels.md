# Imagick::importImagePixels

Source: https://devdocs.io/php/imagick.importimagepixels

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::importImagePixels — Imports image pixels

### Description

```
public Imagick::importImagePixels(
 int $x,
 int $y,
 int $width,
 int $height,
 string $map,
 int $storage,
 array $pixels
): bool
```

Imports pixels from an array into an image. The map is usually 'RGB'. This method imposes the following constraints for the parameters: amount of pixels in the array must match width x height x length of the map. This method is available if Imagick has been compiled against ImageMagick version 6.4.5 or newer.

### Parameters

The image x position

The image y position

The image width

The image height

Map of pixel ordering as a string. This can be for example RGB. The value can be any combination or order of R = red, G = green, B = blue, A = alpha (0 is transparent), O = opacity (0 is opaque), C = cyan, Y = yellow, M = magenta, K = black, I = intensity (for grayscale), P = pad.

The pixel storage method. Refer to this list of pixel constants.

The array of pixels

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::importImagePixels() example

```
<?php

/* Generate array of pixels. 2000 pixels per color stripe */
$count = 2000 * 3;

$pixels = 
   array_merge(array_pad(array(), $count, 0),
               array_pad(array(), $count, 255), 
               array_pad(array(), $count, 0),
               array_pad(array(), $count, 255),
               array_pad(array(), $count, 0));

/* Width and height. The area is amount of pixels divided
   by three. Three comes from 'RGB', three values per pixel */
$width = $height = pow((count($pixels) / 3), 0.5);

/* Create empty image */
$im = new Imagick();
$im->newImage($width, $height, 'gray');

/* Import the pixels into image.
   width * height * strlen("RGB") must match count($pixels) */
$im->importImagePixels(0, 0, $width, $height, "RGB", Imagick::PIXEL_CHAR, $pixels);

/* output as jpeg image */
$im->setImageFormat('jpg');
header("Content-Type: image/jpg");
echo $im;

?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.importimagepixels.php
