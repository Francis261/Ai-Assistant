# Imagick::transverseImage

Source: https://devdocs.io/php/imagick.transverseimage

(PECL imagick 2, PECL imagick 3)

Imagick::transverseImage — Creates a horizontal mirror image

### Description

```
public Imagick::transverseImage(): bool
```

Creates a horizontal mirror image by reflecting the pixels around the central y-axis while rotating them 270-degrees. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

### Parameters

This function has no parameters.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::transverseImage()

```
<?php
function transverseImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->transverseImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

### See Also

- Imagick::transposeImage() - Creates a vertical mirror image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.transverseimage.php
