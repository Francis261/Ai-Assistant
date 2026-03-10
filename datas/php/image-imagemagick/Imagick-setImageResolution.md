# Imagick::setImageResolution

Source: https://devdocs.io/php/imagick.setimageresolution

(PECL imagick 2, PECL imagick 3)

Imagick::setImageResolution — Sets the image resolution

### Description

```
public Imagick::setImageResolution(float $x_resolution, float $y_resolution): bool
```

Sets the image resolution.

### Parameters

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::setImageResolution()

```
<?php
function setImageResolution($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setImageResolution(50, 50);
    
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimageresolution.php
