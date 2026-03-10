# Imagick::compositeImage

Source: https://devdocs.io/php/imagick.compositeimage

(PECL imagick 2, PECL imagick 3)

Imagick::compositeImage — Composite one image onto another

### Description

```
public Imagick::compositeImage(
 Imagick $composite_object,
 int $composite,
 int $x,
 int $y,
 int $channel = Imagick::CHANNEL_DEFAULT
): bool
```

Composite one image onto another at the specified offset. Any extra arguments needed for the compose algorithm should passed to setImageArtifact with 'compose:args' as the first parameter and the data as the second parameter.

### Parameters

Imagick object which holds the composite image

Composite operator. See Composite Operator Constants

The column offset of the composited image

The row offset of the composited image

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

### Return Values

Returns true on success.

### Examples

Example #1 Using Imagick::compositeImage():

Composite two images with the 'mathematics' compose method

```
<?php

// Equivalent to running the command
// convert src1.png src2.png -compose mathematics -define compose:args="1,0,-0.5,0.5" -composite output.png

$src1 = new \Imagick("./src1.png");
$src2 = new \Imagick("./src2.png");

$src1->setImageVirtualPixelMethod(Imagick::VIRTUALPIXELMETHOD_TRANSPARENT);
$src1->setImageArtifact('compose:args', "1,0,-0.5,0.5");
$src1->compositeImage($src2, Imagick::COMPOSITE_MATHEMATICS, 0, 0);
$src1->writeImage("./output.png");

?>
```

### See Also

- Imagick::setImageArtifact() - Set image artifact

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.compositeimage.php
