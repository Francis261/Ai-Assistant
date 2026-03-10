# Imagick::contrastImage

Source: https://devdocs.io/php/imagick.contrastimage

(PECL imagick 2, PECL imagick 3)

Imagick::contrastImage — Change the contrast of the image

### Description

```
public Imagick::contrastImage(bool $sharpen): bool
```

Enhances the intensity differences between the lighter and darker elements of the image. Set sharpen to a value other than 0 to increase the image contrast otherwise the contrast is reduced.

### Parameters

The sharpen value

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::contrastImage()

```
<?php
function contrastImage($imagePath, $contrastType) {
    $imagick = new \Imagick(realpath($imagePath));
    if ($contrastType != 2) {
        $imagick->contrastImage($contrastType);
    }

    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.contrastimage.php
