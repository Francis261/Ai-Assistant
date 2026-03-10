# Imagick::setImageCompressionQuality

Source: https://devdocs.io/php/imagick.setimagecompressionquality

(PECL imagick 2, PECL imagick 3)

Imagick::setImageCompressionQuality — Sets the image compression quality

### Description

```
public Imagick::setImageCompressionQuality(int $quality): bool
```

Sets the image compression quality.

### Parameters

The image compression quality as an integer

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::setImageCompressionQuality()

```
<?php
function setImageCompressionQuality($imagePath, $quality) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setImageCompressionQuality($quality);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimagecompressionquality.php
