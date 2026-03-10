# Imagick::setImageOrientation

Source: https://devdocs.io/php/imagick.setimageorientation

(PECL imagick 2, PECL imagick 3)

Imagick::setImageOrientation — Sets the image orientation

### Description

```
public Imagick::setImageOrientation(int $orientation): bool
```

Sets the image orientation.

### Parameters

One of the orientation constants

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::setImageOrientation()

```
<?php
//Doesn't appear to do anything
function setImageOrientation($imagePath, $orientationType) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setImageOrientation($orientationType);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimageorientation.php
