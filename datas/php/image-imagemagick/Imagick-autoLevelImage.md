# Imagick::autoLevelImage

Source: https://devdocs.io/php/imagick.autolevelimage

(PECL imagick 3 >= 3.3.0)

Imagick::autoLevelImage — Adjusts the levels of a particular image channel

### Description

```
public Imagick::autoLevelImage(int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Adjusts the levels of a particular image channel by scaling the minimum and maximum values to the full quantum range.

### Parameters

Which channel should the auto-levelling should be done on.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::autoLevelImage()

```
<?php
function autoLevelImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->autoLevelImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.autolevelimage.php
