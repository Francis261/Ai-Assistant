# Imagick::setSamplingFactors

Source: https://devdocs.io/php/imagick.setsamplingfactors

(PECL imagick 2, PECL imagick 3)

Imagick::setSamplingFactors — Sets the image sampling factors

### Description

```
public Imagick::setSamplingFactors(array $factors): bool
```

Sets the image sampling factors.

### Parameters

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::setSamplingFactors()

```
<?php
function setSamplingFactors($imagePath) {

    $imagePath = "../imagick/images/FineDetail.png";
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->setImageFormat('jpg');
    $imagick->setSamplingFactors(array('2x2', '1x1', '1x1'));

    $compressed = $imagick->getImageBlob();

    
    $reopen = new \Imagick();
    $reopen->readImageBlob($compressed);

    $reopen->resizeImage(
        $reopen->getImageWidth() * 4,
        $reopen->getImageHeight() * 4,
        \Imagick::FILTER_POINT,
        1
    );
    
    header("Content-Type: image/jpg");
    echo $reopen->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setsamplingfactors.php
