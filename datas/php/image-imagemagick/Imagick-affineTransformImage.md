# Imagick::affineTransformImage

Source: https://devdocs.io/php/imagick.affinetransformimage

(PECL imagick 2, PECL imagick 3)

Imagick::affineTransformImage — Transforms an image

### Description

```
public Imagick::affineTransformImage(ImagickDraw $matrix): bool
```

Transforms an image as dictated by the affine matrix.

### Parameters

The affine matrix

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::affineTransformImage()

```
<?php
function affineTransformImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $draw = new \ImagickDraw();

    $angle = deg2rad(40);

    $affineRotate = array(
        "sx" => cos($angle), "sy" => cos($angle), 
        "rx" => sin($angle), "ry" => -sin($angle), 
        "tx" => 0, "ty" => 0,
    );

    $draw->affine($affineRotate);

    $imagick->affineTransformImage($draw);

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.affinetransformimage.php
