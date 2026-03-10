# imagecropauto

Source: https://devdocs.io/php/function.imagecropauto

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

imagecropauto — Crop an image automatically using one of the available modes

### Description

```
imagecropauto(
 GdImage $image,
 int $mode = IMG_CROP_DEFAULT,
 float $threshold = 0.5,
 int $color = -1
): GdImage|false
```

Automatically crops an image according to the given mode.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

One of the following constants:

Specifies the tolerance in percent to be used while comparing the image color and the color to crop. The method used to calculate the color difference is based on the color distance in the RGB(a) cube.

Used only in IMG_CROP_THRESHOLD mode.

Note: Before PHP 7.4.0, the bundled libgd used a somewhat different algorithm, so the same threshold yielded different results for system and bundled libgd.

Either an RGB color value or a palette index.

Used only in IMG_CROP_THRESHOLD mode.

### Return Values

Returns a cropped image object on success or false on failure. false is also returned if the whole image was cropped.

### Changelog

### Examples

Example #1 Proper handling of auto-cropping

As noted in the return value section, imagecropauto() returns false if the whole image was cropped. In this example we have an image object $im which should be automatically cropped only if there is something to crop; otherwise we want to proceed with the original image.

```
<?php
$cropped = imagecropauto($im, IMG_CROP_DEFAULT);
if ($cropped !== false) { // in case a new image object was returned
    $im = $cropped;       // assign the cropped image to $im
}
?>
```

### See Also

- imagecrop() - Crop an image to the given rectangle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecropauto.php
