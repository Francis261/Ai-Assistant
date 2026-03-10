# Imagick::posterizeImage

Source: https://devdocs.io/php/imagick.posterizeimage

(PECL imagick 2, PECL imagick 3)

Imagick::posterizeImage — Reduces the image to a limited number of color level

### Description

```
public Imagick::posterizeImage(int $levels, bool $dither): bool
```

Reduces the image to a limited number of color level.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::posterizeImage()

```
<?php
function posterizeImage($imagePath, $posterizeType, $numberLevels) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->posterizeImage($numberLevels, $posterizeType);
    $imagick->setImageFormat('png');
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

posterizeImage($imagePath, \Imagick::DITHERMETHOD_RIEMERSMA, 8);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.posterizeimage.php
