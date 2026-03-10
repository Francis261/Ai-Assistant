# Imagick::flipImage

Source: https://devdocs.io/php/imagick.flipimage

(PECL imagick 2, PECL imagick 3)

Imagick::flipImage — Creates a vertical mirror image

### Description

```
public Imagick::flipImage(): bool
```

Creates a vertical mirror image by reflecting the pixels around the central x-axis.

### Parameters

This function has no parameters.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::flipImage()

```
<?php
function flipImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->flipImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

### See Also

- Imagick::flopimage() - Creates a horizontal mirror image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.flipimage.php
