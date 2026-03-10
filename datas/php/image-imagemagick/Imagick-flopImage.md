# Imagick::flopImage

Source: https://devdocs.io/php/imagick.flopimage

(PECL imagick 2, PECL imagick 3)

Imagick::flopImage — Creates a horizontal mirror image

### Description

```
public Imagick::flopImage(): bool
```

Creates a horizontal mirror image by reflecting the pixels around the central y-axis.

### Parameters

This function has no parameters.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::flopImage()

```
<?php
function flopImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->flopImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

### See Also

- Imagick::flipimage() - Creates a vertical mirror image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.flopimage.php
