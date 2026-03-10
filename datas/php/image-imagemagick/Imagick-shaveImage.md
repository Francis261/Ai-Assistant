# Imagick::shaveImage

Source: https://devdocs.io/php/imagick.shaveimage

(PECL imagick 2, PECL imagick 3)

Imagick::shaveImage — Shaves pixels from the image edges

### Description

```
public Imagick::shaveImage(int $columns, int $rows): bool
```

Shaves pixels from the image edges. It allocates the memory necessary for the new Image structure and returns a pointer to the new image.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::shaveImage()

```
<?php
function shaveImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->shaveImage(100, 50);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.shaveimage.php
