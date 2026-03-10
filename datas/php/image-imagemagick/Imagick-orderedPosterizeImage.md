# Imagick::orderedPosterizeImage

Source: https://devdocs.io/php/imagick.orderedposterizeimage

(PECL imagick 2 >= 2.2.2, PECL imagick 3)

Imagick::orderedPosterizeImage — Performs an ordered dither

This function has been DEPRECATED as of Imagick 3.4.4. Relying on this function is highly discouraged.

### Description

```
public Imagick::orderedPosterizeImage(string $threshold_map, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Performs an ordered dither based on a number of pre-defined dithering threshold maps, but over multiple intensity levels, which can be different for different channels, according to the input arguments. This method is available if Imagick has been compiled against ImageMagick version 6.3.1 or newer.

### Parameters

A string containing the name of the threshold dither map to use

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Imagick::orderedPosterizeImage()

```
<?php
function orderedPosterizeImage($imagePath, $orderedPosterizeType) {
    $imagick = new \Imagick(realpath($imagePath));
    
  
    $imagick->orderedPosterizeImage($orderedPosterizeType);
    $imagick->setImageFormat('png');
    
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

//orderedPosterizeImage($imagePath, 'o4x4,3,3');
//orderedPosterizeImage($imagePath, 'o8x8,6,6');
orderedPosterizeImage($imagePath, 'h8x8a');

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.orderedposterizeimage.php
