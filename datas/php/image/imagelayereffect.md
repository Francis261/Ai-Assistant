# imagelayereffect

Source: https://devdocs.io/php/function.imagelayereffect

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

imagelayereffect — Set the alpha blending flag to use layering effects

### Description

```
imagelayereffect(GdImage $image, int $effect): bool
```

Set the alpha blending flag to use layering effects.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

One of the following constants:

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imagelayereffect() example

```
<?php
// Setup an image
$im = imagecreatetruecolor(100, 100);

// Set a background
imagefilledrectangle($im, 0, 0, 100, 100, imagecolorallocate($im, 220, 220, 220));

// Apply the overlay alpha blending flag
imagelayereffect($im, IMG_EFFECT_OVERLAY);

// Draw two grey ellipses
imagefilledellipse($im, 50, 50, 40, 40, imagecolorallocate($im, 100, 255, 100));
imagefilledellipse($im, 50, 50, 50, 80, imagecolorallocate($im, 100, 100, 255));
imagefilledellipse($im, 50, 50, 80, 50, imagecolorallocate($im, 255, 100, 100));

// Output
header('Content-type: image/png');

imagepng($im);
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagelayereffect.php
