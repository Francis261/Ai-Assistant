# Imagick::medianFilterImage

Source: https://devdocs.io/php/imagick.medianfilterimage

(PECL imagick 2, PECL imagick 3)

Imagick::medianFilterImage — Applies a digital filter

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::medianFilterImage(float $radius): bool
```

Applies a digital filter that improves the quality of a noisy image. Each pixel is replaced by the median in a set of neighboring pixels as defined by radius.

### Parameters

The radius of the pixel neighborhood.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::medianFilterImage()

```
<?php
function medianFilterImage($radius, $imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    @$imagick->medianFilterImage($radius);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.medianfilterimage.php
