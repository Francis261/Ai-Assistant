# Imagick::smushImages

Source: https://devdocs.io/php/imagick.smushimages

(PECL imagick 3 >= 3.3.0)

Imagick::smushImages — Takes all images from the current image pointer to the end of the image list and smushs them

### Description

```
public Imagick::smushImages(bool $stack, int $offset): Imagick
```

Takes all images from the current image pointer to the end of the image list and smushs them to each other top-to-bottom if the stack parameter is true, otherwise left-to-right.

### Parameters

### Return Values

The new smushed image.

### Examples

Example #1 Imagick::smushImages()

```
<?php
function smushImages($imagePath, $imagePath2) {

    $imagick = new \Imagick(realpath($imagePath));
    $imagick2 = new \Imagick(realpath($imagePath2));

    $imagick->addimage($imagick2);
    $smushed = $imagick->smushImages(false, 50);
    $smushed->setImageFormat('jpg');
    header("Content-Type: image/jpg");
    echo $smushed->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.smushimages.php
