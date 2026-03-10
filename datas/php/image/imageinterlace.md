# imageinterlace

Source: https://devdocs.io/php/function.imageinterlace

(PHP 4, PHP 5, PHP 7, PHP 8)

imageinterlace — Enable or disable interlace

### Description

```
imageinterlace(GdImage $image, ?bool $enable = null): bool
```

imageinterlace() turns the interlace bit on or off.

If the interlace bit is set and the image is used as a JPEG image, the image is created as a progressive JPEG.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

If true, the image will be interlaced, if false the interlace bit is turned off. Passing null will result in the interlacing behavior not being changed.

### Return Values

Returns true if the interlace bit is set for the image, false otherwise.

### Changelog

### Examples

Example #1 Turn on interlacing using imageinterlace()

```
<?php
// Create an image instance
$im = imagecreatefromgif('php.gif');

// Enable interlancing
imageinterlace($im, true);

// Save the interlaced image
imagegif($im, './php_interlaced.gif');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageinterlace.php
