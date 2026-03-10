# Imagick::haldClutImage

Source: https://devdocs.io/php/imagick.haldclutimage

(PECL imagick 3)

Imagick::haldClutImage — Replaces colors in the image

### Description

```
public Imagick::haldClutImage(Imagick $clut, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Replaces colors in the image using a Hald lookup table. Hald images can be created using HALD color coder.

### Parameters

Imagick object containing the Hald lookup image.

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::haldClutImage()

```
<?php
function haldClutImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagickPalette = new \Imagick(realpath("images/hald/hald_8.png"));
    $imagickPalette->sepiatoneImage(55);
    $imagick->haldClutImage($imagickPalette);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.haldclutimage.php
