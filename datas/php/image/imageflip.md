# imageflip

Source: https://devdocs.io/php/function.imageflip

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

imageflip — Flips an image using a given mode

### Description

```
imageflip(GdImage $image, int $mode): bool
```

Flips the image image using the given mode.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

Flip mode, this can be one of the IMG_FLIP_* constants:

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Flips an image vertically

This example uses the IMG_FLIP_VERTICAL constant.

```
<?php
// File
$filename = 'phplogo.png';

// Content type
header('Content-type: image/png');

// Load
$im = imagecreatefrompng($filename);

// Flip it vertically
imageflip($im, IMG_FLIP_VERTICAL);

// Output
imagejpeg($im);
?>
```

The above example will output something similar to:

Example #2 Flips the image horizontally

This example uses the IMG_FLIP_HORIZONTAL constant.

```
<?php
// File
$filename = 'phplogo.png';

// Content type
header('Content-type: image/png');

// Load
$im = imagecreatefrompng($filename);

// Flip it horizontally
imageflip($im, IMG_FLIP_HORIZONTAL);

// Output
imagejpeg($im);
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageflip.php
