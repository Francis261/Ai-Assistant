# Imagick::embossImage

Source: https://devdocs.io/php/imagick.embossimage

(PECL imagick 2, PECL imagick 3)

Imagick::embossImage — Returns a grayscale image with a three-dimensional effect

### Description

```
public Imagick::embossImage(float $radius, float $sigma): bool
```

Returns a grayscale image with a three-dimensional effect. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and it will choose a suitable radius for you.

### Parameters

The radius of the effect

The sigma of the effect

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::embossImage()

```
<?php
function embossImage($imagePath, $radius, $sigma) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->embossImage($radius, $sigma);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.embossimage.php
