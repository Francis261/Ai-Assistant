# Imagick::newPseudoImage

Source: https://devdocs.io/php/imagick.newpseudoimage

(PECL imagick 2, PECL imagick 3)

Imagick::newPseudoImage — Creates a new image

### Description

```
public Imagick::newPseudoImage(int $columns, int $rows, string $pseudoString): bool
```

Creates a new image using ImageMagick pseudo-formats.

### Parameters

columns in the new image

rows in the new image

string containing pseudo image definition.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::newPseudoImage()

```
<?php
function newPseudoImage($canvasType) {
    $imagick = new \Imagick();
    $imagick->newPseudoImage(300, 300, $canvasType);
    $imagick->setImageFormat("png");
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

//newPseudoImage('gradient:red-rgba(64, 255, 255, 0.5)');
//newPseudoImage("radial-gradient:red-blue");
newPseudoImage("plasma:fractal");

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.newpseudoimage.php
