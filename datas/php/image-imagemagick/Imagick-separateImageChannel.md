# Imagick::separateImageChannel

Source: https://devdocs.io/php/imagick.separateimagechannel

(PECL imagick 2, PECL imagick 3)

Imagick::separateImageChannel — Separates a channel from the image

### Description

```
public Imagick::separateImageChannel(int $channel): bool
```

Separates a channel from the image and returns a grayscale image. A channel is a particular color component of each pixel in the image.

### Parameters

Which 'channel' to return. For colorspaces other than RGB, you can still use the CHANNEL_RED, CHANNEL_GREEN, CHANNEL_BLUE constants to indicate the 1st, 2nd and 3rd channels.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::separateImageChannel()

```
<?php
function separateImageChannel($imagePath, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->separateimagechannel($channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

separateImageChannel($imagePath, \Imagick::CHANNEL_GREEN);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.separateimagechannel.php
