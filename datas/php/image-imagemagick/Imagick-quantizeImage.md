# Imagick::quantizeImage

Source: https://devdocs.io/php/imagick.quantizeimage

(PECL imagick 2, PECL imagick 3)

Imagick::quantizeImage — Analyzes the colors within a reference image

### Description

```
public Imagick::quantizeImage(
 int $numberColors,
 int $colorspace,
 int $treedepth,
 bool $dither,
 bool $measureError
): bool
```

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::quantizeImage()

```
<?php
function quantizeImage($imagePath, $numberColors, $colorSpace, $treeDepth, $dither) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->quantizeImage($numberColors, $colorSpace, $treeDepth, $dither, false);
    $imagick->setImageFormat('png');
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.quantizeimage.php
