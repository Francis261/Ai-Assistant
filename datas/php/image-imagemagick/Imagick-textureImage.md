# Imagick::textureImage

Source: https://devdocs.io/php/imagick.textureimage

(PECL imagick 2, PECL imagick 3)

Imagick::textureImage — Repeatedly tiles the texture image

### Description

```
Imagick::textureImage(Imagick $texture_wand): Imagick
```

Repeatedly tiles the texture image across and down the image canvas.

### Parameters

Imagick object to use as texture image

### Return Values

Returns a new Imagick object that has the repeated texture applied.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::textureImage()

```
<?php
function textureImage($imagePath) {
    $image = new \Imagick();
    $image->newImage(640, 480, new \ImagickPixel('pink'));
    $image->setImageFormat("jpg");
    $texture = new \Imagick(realpath($imagePath));
    $texture->scaleimage($image->getimagewidth() / 4, $image->getimageheight() / 4);
    $image = $image->textureImage($texture);
    header("Content-Type: image/jpg");
    echo $image;
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.textureimage.php
