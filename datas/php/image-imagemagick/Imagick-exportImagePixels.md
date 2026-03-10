# Imagick::exportImagePixels

Source: https://devdocs.io/php/imagick.exportimagepixels

(PECL imagick 2 >=2.3.0, PECL imagick 3)

Imagick::exportImagePixels — Exports raw image pixels

### Description

```
public Imagick::exportImagePixels(
 int $x,
 int $y,
 int $width,
 int $height,
 string $map,
 int $STORAGE
): array
```

Exports image pixels into an array. The map defines the ordering of the exported pixels. The size of the returned array is width * height * strlen(map). This method is available if Imagick has been compiled against ImageMagick version 6.4.7 or newer.

### Parameters

X-coordinate of the exported area

Y-coordinate of the exported area

Width of the exported aread

Height of the exported area

Ordering of the exported pixels. For example "RGB". Valid characters for the map are R, G, B, A, O, C, Y, M, K, I and P.

Refer to this list of pixel type constants

### Return Values

Returns an array containing the pixels values.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Using Imagick::exportImagePixels()

Export image pixels into an array

```
<?php

/* Create new object */
$im = new Imagick();

/* Create new image */
$im->newPseudoImage(0, 0, "magick:rose");

/* Export the image pixels */
$pixels = $im->exportImagePixels(10, 10, 2, 2, "RGB", Imagick::PIXEL_CHAR);

/* Output */
var_dump($pixels);
?>
```

The above example will output:

```
array(12) {
  [0]=>
  int(72)
  [1]=>
  int(64)
  [2]=>
  int(57)
  [3]=>
  int(69)
  [4]=>
  int(59)
  [5]=>
  int(43)
  [6]=>
  int(124)
  [7]=>
  int(120)
  [8]=>
  int(-96)
  [9]=>
  int(91)
  [10]=>
  int(84)
  [11]=>
  int(111)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.exportimagepixels.php
