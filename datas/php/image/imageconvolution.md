# imageconvolution

Source: https://devdocs.io/php/function.imageconvolution

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

imageconvolution — Apply a 3x3 convolution matrix, using coefficient and offset

### Description

```
imageconvolution(
 GdImage $image,
 array $matrix,
 float $divisor,
 float $offset
): bool
```

Applies a convolution matrix on the image, using the given coefficient and offset.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

A 3x3 matrix: an array of three arrays of three floats.

The divisor of the result of the convolution, used for normalization.

Color offset.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Embossing the PHP.net logo

```
<?php
$image = imagecreatefromgif('http://www.php.net/images/php.gif');

$emboss = array(array(2, 0, 0), array(0, -1, 0), array(0, 0, -1));
imageconvolution($image, $emboss, 1, 127);

header('Content-Type: image/png');
imagepng($image, null, 9);
?>
```

The above example will output:

Example #2 Gaussian blur

```
<?php
$image = imagecreatetruecolor(180,40);

// Writes the text and apply a gaussian blur on the image
imagestring($image, 5, 10, 8, 'Gaussian Blur Text', 0x00ff00);
$gaussian = array(array(1.0, 2.0, 1.0), array(2.0, 4.0, 2.0), array(1.0, 2.0, 1.0));
imageconvolution($image, $gaussian, 16, 0);

// Rewrites the text for comparison
imagestring($image, 5, 10, 18, 'Gaussian Blur Text', 0x00ff00);

header('Content-Type: image/png');
imagepng($image, null, 9);
?>
```

The above example will output:

### See Also

- imagefilter() - Applies a filter to an image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imageconvolution.php
