# Imagick::transposeImage

Source: https://devdocs.io/php/imagick.transposeimage

(PECL imagick 2, PECL imagick 3)

Imagick::transposeImage — Creates a vertical mirror image

### Description

```
public Imagick::transposeImage(): bool
```

Creates a vertical mirror image by reflecting the pixels around the central x-axis while rotating them 90-degrees. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

This function has no parameters.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::transposeImage()

```
<?php
function transposeImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->transposeImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

### See Also

- Imagick::transverseImage() - Creates a horizontal mirror image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.transposeimage.php
