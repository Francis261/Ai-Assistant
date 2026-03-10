# Imagick::combineImages

Source: https://devdocs.io/php/imagick.combineimages

(PECL imagick 2, PECL imagick 3)

Imagick::combineImages — Combines one or more images into a single image

### Description

```
public Imagick::combineImages(int $channelType): Imagick
```

Combines one or more images into a single image. The grayscale value of the pixels of each image in the sequence is assigned in order to the specified channels of the combined image. The typical ordering would be image 1 => Red, 2 => Green, 3 => Blue, etc.

### Parameters

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.combineimages.php
