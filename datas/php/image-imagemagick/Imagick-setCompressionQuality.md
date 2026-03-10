# Imagick::setCompressionQuality

Source: https://devdocs.io/php/imagick.setcompressionquality

(PECL imagick 2, PECL imagick 3)

Imagick::setCompressionQuality — Sets the object's default compression quality

### Description

```
public Imagick::setCompressionQuality(int $quality): bool
```

Sets the object's default compression quality.

This method only works for new images e.g. those created through Imagick::newPseudoImage. For existing images you should use Imagick::setImageCompressionQuality().

### Parameters

An int between 1 and 100, 1 = high compression, 100 low compression.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::setCompressionQuality()

```
<?php
function setCompressionQuality($imagePath, $quality) {

    $backgroundImagick = new \Imagick(realpath($imagePath));
    $imagick = new \Imagick();
    $imagick->setCompressionQuality($quality);
    $imagick->newPseudoImage(
        $backgroundImagick->getImageWidth(),
        $backgroundImagick->getImageHeight(),
        'canvas:white'
    );

    $imagick->compositeImage(
        $backgroundImagick,
        \Imagick::COMPOSITE_ATOP,
        0,
        0
    );
    
    $imagick->setFormat("jpg");    
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setcompressionquality.php
