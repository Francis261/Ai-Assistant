# Imagick::transformImageColorspace

Source: https://devdocs.io/php/imagick.transformimagecolorspace

(PECL imagick 3)

Imagick::transformImageColorspace — Transforms an image to a new colorspace

### Description

```
public Imagick::transformImageColorspace(int $colorspace): bool
```

Transforms an image to a new colorspace.

### Parameters

The colorspace the image should be transformed to, one of the COLORSPACE constants e.g. Imagick::COLORSPACE_CMYK.

### Return Values

Returns true on success.

### Examples

Example #1 Imagick::transformImageColorspace() example

Transforms an image to a new colorspace, and then extracts a single channel so that the individual channel values can be viewed.

```
<?php
function transformImageColorspace($imagePath, $colorSpace, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->transformimagecolorspace($colorSpace);
    //channel should be one of the channel constants e.g. \Imagick::CHANNEL_BLUE 
    $imagick->separateImageChannel($channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}
?>
```

### See Also

- Imagick::setColorSpace() - Set colorspace

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.transformimagecolorspace.php
