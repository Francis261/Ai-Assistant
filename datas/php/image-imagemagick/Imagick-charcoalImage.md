# Imagick::charcoalImage

Source: https://devdocs.io/php/imagick.charcoalimage

(PECL imagick 2, PECL imagick 3)

Imagick::charcoalImage — Simulates a charcoal drawing

### Description

```
public Imagick::charcoalImage(float $radius, float $sigma): bool
```

Simulates a charcoal drawing.

### Parameters

The radius of the Gaussian, in pixels, not counting the center pixel

The standard deviation of the Gaussian, in pixels

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::charcoalImage()

```
<?php
function charcoalImage($imagePath, $radius, $sigma) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->charcoalImage($radius, $sigma);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.charcoalimage.php
