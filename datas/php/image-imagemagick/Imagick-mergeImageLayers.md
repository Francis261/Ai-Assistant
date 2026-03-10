# Imagick::mergeImageLayers

Source: https://devdocs.io/php/imagick.mergeimagelayers

(PECL imagick 2 >= 2.1.0, PECL imagick 3)

Imagick::mergeImageLayers — Merges image layers

### Description

```
public Imagick::mergeImageLayers(int $layer_method): Imagick
```

Merges image layers into one. This method is useful when working with image formats that use multiple layers such as PSD. The merging is controlled using the layer_method which defines how the layers are merged. This method is available if Imagick has been compiled against ImageMagick version 6.3.7 or newer.

### Parameters

One of the Imagick::LAYERMETHOD_* constants

### Return Values

Returns an Imagick object containing the merged image.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::mergeImageLayers()

```
<?php
function mergeImageLayers($layerMethodType, $imagePath1, $imagePath2) {

    $imagick = new \Imagick(realpath($imagePath));

    $imagick2 = new \Imagick(realpath($imagePath2));
    $imagick->addImage($imagick2);
    $imagick->setImageFormat('png');

    $result = $imagick->mergeImageLayers($layerMethodType);
    header("Content-Type: image/png");
    echo $result->getImageBlob();
}

?>
```

### See Also

- Imagick::flattenImages() - Merges a sequence of images

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.mergeimagelayers.php
